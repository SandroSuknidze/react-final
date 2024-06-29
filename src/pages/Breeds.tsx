import { useCatBreeds } from '../hooks/useCatBreeds'; // Adjust the import path as necessary
import { useLocalStorage } from '../hooks/useLocalStorage'; // Adjust the import path as necessary

export function Breeds() {
    const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);
    const { breeds, loading, error } = useCatBreeds(currentPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

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
                    onClick={handlePreviousPage}
                >
                    Previous
                </button>
                <button
                    disabled={currentPage === 4}
                    onClick={handleNextPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
