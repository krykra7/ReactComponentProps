import "./styles.css";
import {ListContainer as NotWorking} from "./notworking/ListContainer";
import {ListContainer as Working} from "./working/ListContainer";

export default function App() {
    return (
        <div className="App">
            {/*  Not working*/}
            <NotWorking patientId={1}/>
            {/* working */}
            {/*<Working patientId={1}/>*/}
        </div>

    );
}
