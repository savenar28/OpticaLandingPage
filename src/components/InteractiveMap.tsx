import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function InteractiveMap() {
    // Coordenadas aproximadas de Cl. 174a #45-58, Suba, Bogotá
    const position: L.LatLngExpression = [4.7551722, -74.0476566];

    useEffect(() => {
        // Ensure Leaflet is properly initialized
        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <div className="h-64 w-full rounded-lg overflow-hidden shadow-xl border-2 border-white/10">
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
                className="z-0"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={position}>
                    <Popup>
                        <div className="text-center">
                            <strong className="text-[#990000] font-serif text-lg">Óptica S&V</strong>
                            <p className="text-sm text-gray-600 mt-1">Cl. 174a #45-58</p>
                            <p className="text-sm text-gray-600">Suba, Bogotá</p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Cl.+174a+%2345+-+58,+Suba,+Bogotá"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#990000] hover:text-[#CC0000] underline mt-2 inline-block"
                            >
                                Abrir en Google Maps
                            </a>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
