
import { Map, Marker } from "pigeon-maps"
import Navbar2 from "../../Header/Navbar2";

const Destination = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="flex max-w-screen-xl mx-auto">

                <div className="flex-1">
                    <h1>Cards will be here</h1>

                </div>
                <div className="flex-1 max-w-sm flex items center justify-center mr-24 border-2 border-yellow-500 mt-12 rounded-lg">
                    <Map height={450} defaultCenter={[21.4512, 92.0085]} defaultZoom={11}>
                        <Marker width={20} anchor={[21.4512, 92.0085]} />
                    </Map>

                </div>

            </div>
        </div>
    );
};

export default Destination;