from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/sumar', methods=['GET'])
def sumar():
    num1 = float(request.args.get('a'))
    num2 = float(request.args.get('b'))
    resultado = num1 + num2
    return jsonify({'resultado': resultado})

@app.route('/restar', methods=['GET'])
def restar():
    num1 = float(request.args.get('a'))
    num2 = float(request.args.get('b'))
    resultado = num1 - num2
    return jsonify({'resultado': resultado})

@app.route('/multiplicar', methods=['GET'])
def multiplicar():
    num1 = float(request.args.get('a'))
    num2 = float(request.args.get('b'))
    resultado = num1 * num2
    return jsonify({'resultado': resultado})

@app.route('/dividir', methods=['GET'])
def dividir():
    num1 = float(request.args.get('a'))
    num2 = float(request.args.get('b'))
    if num2 == 0:
        return jsonify({'error': 'No se puede dividir por cero'}), 400
    resultado = num1 / num2
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run(debug=True)
