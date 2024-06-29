import { useEffect, useState } from "react";
import axios from 'axios';

type CatBreed = {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;
};

export function Breeds() {
    const [breeds, setBreeds] = useState<CatBreed[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get(`https://catfact.ninja/breeds?page=${currentPage}`)
            .then((response) => {
                const data = response.data as { data: CatBreed[] };
                setBreeds(data.data);
            })
            .catch((error) => {
                console.error('Error fetching breeds:', error);
            });
    }, [currentPage]);

    return (
        <div>
            <h1>Cat Breeds</h1>
            <ul>
                {breeds.map((breed, index) => (
                    <li key={index}>
                        <strong>{breed.breed}</strong>
                        <ul>
                            <li>Country: {breed.country}</li>
                            <li>Origin: {breed.origin}</li>
                            <li>Coat: {breed.coat}</li>
                            <li>Pattern: {breed.pattern}</li>
                        </ul>
                    </li>
                ))}
            </ul>
            <div>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <button
                    disabled={currentPage === 4}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
