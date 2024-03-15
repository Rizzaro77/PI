package pijava;

import java.util.Scanner;

public class pijava {
	public static void main(String[] args) {
		double vlprod;
		int numprod;
		double vlfret;
		double vlrtotal;
		
		Scanner e = new Scanner(System.in);
		System.out.println("Digite o número de produtos vendidos ");
		numprod = e.nextInt();
		System.out.println("Qual o valor unitário de cada produto ");
		vlprod = e.nextDouble();
		System.out.println("Digite o valor do frete ");
		vlfret = e.nextDouble();
		vlrtotal = vlprod*numprod+vlfret;
		System.out.println("O valor total é R$"+vlrtotal);
	
		
	}
}



