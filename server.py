from flask import Flask, jsonify, render_template
import sqlite3
import pandas as pd
from sqlalchemy import create_engine

def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except:
        print("db not exist")
    
    return conn


df = pd.read_csv("data_new_set.csv")
# print(df)
conn = create_connection("my.db")

df.to_sql('data_set', conn, if_exists='replace')
conn.close();

db_url = 'sqlite:///my.db'
engine = create_engine(db_url, echo= True)
df_2 = pd.read_sql('select * from data_set', engine)
# print(df_2)

app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("index.html")

@app.route('/get-d_chart1')
def get_data_1():
    data = []
    grouped_df = df_2.groupby("Product_line")["Total"].sum().reset_index()

    for index, row in grouped_df.iterrows():
        data.append({"status": row["Product_line"], "value": int(row["Total"])})
    return jsonify(data)
# chart2
@app.route('/get-d_chart2')
def get_data_2():
    data = []
    payment_data = df.groupby('Payment')['Total'].sum().reset_index()
    total_payments = payment_data['Total'].sum()
    if total_payments > 0:
        payment_data['Percentage'] = (payment_data['Total'] / total_payments) * 100

    for index, row in payment_data.iterrows():
        data.append({"category": row["Payment"], "value": int(row["Percentage"])})

    return jsonify(data)

# chart 3
# @app.route('/get-d_chart3')
# def get_data_3():
#     data = []
#     daily_totals = df_2.groupby('Date')['Total'].sum().reset_index()

#     for index, row in daily_totals.iterrows():
#         data.append({"date": str(row["Date"]), "value": row["Total"]})

# chart4
@app.route('/get-d_chart4')
def get_data_4():
    data = []
    product_line_ratings = df_2.groupby('Product_line')['Rating'].mean().reset_index()
    for index, row in product_line_ratings.iterrows():
        data.append({"category": row["Product_line"], "value": round(row["Rating"], 2)})

    return jsonify(data)

@app.route('/get-d_chart5')
def get_data_5():
     data = []
     product_line_data = df_2.groupby('Product_line')[['Unit_price', 'Quantity']].mean().reset_index()

     for index, row in product_line_data.iterrows():
        data.append({
            "category": row["Product_line"],
            "unit_price": row["Unit_price"],
            "quantity": row["Quantity"]
        })

     return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True) 





