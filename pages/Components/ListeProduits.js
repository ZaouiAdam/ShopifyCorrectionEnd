import Produit from "./Produit.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';



function replaceElem(arr, i, elem) {
	return arr.slice(0, i).concat([elem]).concat(arr.slice(i + 1, arr.length));
}

export default function ListeProduits({produits, setProduits}) {
	
	function setProduit(i) {
		return newProduit => setProduits(replaceElem(produits, i, newProduit));
	}
	
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Nom du produit</th>
					<th>Quantiter</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{produits.map((p, i) => (<Produit produit={p} setProduit={setProduit(i)}/>))}
			</tbody>
		</Table>
	);
}

