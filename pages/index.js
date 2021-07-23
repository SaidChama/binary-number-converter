import Head from 'next/head'
import Image from 'next/image'
import HomeStyles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={HomeStyles.container}>
			<h1>Binary - Decimal Converter</h1>
			<div className={HomeStyles.inputContainer}>
				{/* <h3>Insira o Número Binário a ser convertido (Insert Binary Number to Convert):</h3> */}
				<input required/>
				<label>Insira o Número Decimal a ser convertido (Insert Decimal Number to Convert):</label>
				<span />
			</div>
			<div className={HomeStyles.resultContainer}>
				<input required readOnly/>
				<label>Resultado (Result):</label>
				<span />
			</div>
			<div className={HomeStyles.buttonContainer}>
				<button>
					Convert
				</button>
			</div>
		</div>
	)
}
