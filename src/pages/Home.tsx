import {Cube} from "../components/Cube.tsx";
import '../styles/Home.scss';

export function Home() {
    return (
        <>
            <div className="home-container">
                <h1>home</h1>
                <Cube/>
            </div>
        </>
    );
}