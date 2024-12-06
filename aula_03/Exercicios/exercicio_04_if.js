
let caracteristica1 = prompt("Digite a primeira característica (vertebrado/invertebrado):").toLowerCase();
let caracteristica2 = prompt("Digite a segunda característica (mamífero/ave/inseto/anelideo):").toLowerCase();
let caracteristica3 = prompt("Digite a terceira característica (onivoro/herbivoro/carnivoro/hematofago):").toLowerCase();

// Lógica para identificar o animal baseado nas características
if (caracteristica1 === "vertebrado") {
    if (caracteristica2 === "mamífero") {
        if (caracteristica3 === "onivoro") {
            alert("O animal é um Homem.");
        } else if (caracteristica3 === "herbivoro") {
            alert("O animal é uma Vaca.");
        }
    } else if (caracteristica2 === "ave") {
        if (caracteristica3 === "carnivoro") {
            alert("O animal é uma Águia.");
        } else if (caracteristica3 === "onivoro") {
            alert("O animal é uma Pomba.");
        }
    }
} else if (caracteristica1 === "invertebrado") {
    if (caracteristica2 === "inseto") {
        if (caracteristica3 === "hematofago") {
            alert("O animal é uma Pulga.");
        } else if (caracteristica3 === "herbivoro") {
            alert("O animal é uma Lagarta.");
        }
    } else if (caracteristica2 === "anelideo") {
        if (caracteristica3 === "onivoro") {
            alert("O animal é uma Minhoca.");
        } else if (caracteristica3 === "hematofago") {
            alert("O animal é uma Sanguessuga.");
        }
    }
}
