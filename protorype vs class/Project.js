class Author{
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
}

class Painting {
    constructor(title, price, year, author) {
        this.author = new Author(author);
        this.title = title;
        this.price = price;
        this.year = year;
    }
}

class Gallery {
    constructor() {
        this.paintings = [];
    }
    getTotalPrice() {
        let total_price = 0;
        for (let i = 0; i < this.paintings.length; i++) {
            total_price += this.paintings[i].price;
        }
        return total_price;
    }
    getTopThreePaintings() {
        let top;
        top = this.paintings.sort((a, b) => b.price - a.price).slice(0, 3);
        return top;
    }

    getPaintingByAuthorSorted(authorName) {
        const paintingsByAuthor = this.paintings.filter(painting => painting.author.firstName === authorName || painting.author.lastName === authorName).sort((a, b) => a.price - b.price);
        return paintingsByAuthor.map(painting => ({ title: painting.title, price: painting.price }));
    }

    getAuthorsWithPaintings() {
        const authorsMap = new Map();

        this.paintings.forEach(painting => {
            const authorKey = `${painting.author.firstName} ${painting.author.lastName}`;

            if (!authorsMap.has(authorKey)) {
                authorsMap.set(authorKey, []);
            }

            authorsMap.get(authorKey).push(painting);
        });

        return Array.from(authorsMap.entries()).map(([author, paintings]) => ({ author, paintings }));
    }
}

const gallery = new Gallery();
gallery.paintings.push(new Painting("Nazej", 12345, "2024", ["Onzej", "Deges", new Date(2023, 1, 1)]));
gallery.paintings.push(new Painting("Nazej2", 12346, "2023", ["Onzej2", "Deges2", new Date(2023, 3, 2)]));
gallery.paintings.push(new Painting("Nazej3", 12370, "2022", ["Onzej3", "Deges3", new Date(2023, 3, 2)]));
gallery.paintings.push(new Painting("Nazej4", 12000, "1900", ["Onzej4", "Deges4", new Date(2023, 3, 2)]));
gallery.paintings.push(new Painting("Nazej5", 90000, "2001", ["Onzej5", "Deges5", new Date(2023, 3, 2)]));
console.log(gallery.getTotalPrice());
console.log(gallery.getTopThreePaintings());

