import { useState, useEffect } from 'react';
import axios from 'axios';

// Define a type for each cat breed (only if using TypeScript)
type CatBreed = {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;
};

// Custom hook to fetch cat breed data
export function useCatBreeds(currentPage: number) {
    const [breeds, setBreeds] = useState<CatBreed[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await axios.get(`https://catfact.ninja/breeds?page=${currentPage}`);
                setBreeds(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(err as Error);
                setLoading(false);
            }
        };

        fetchBreeds();
    }, [currentPage]);

    return { breeds, loading, error };
}
