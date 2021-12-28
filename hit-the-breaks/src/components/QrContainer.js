import QrReader from 'react-qr-scanner';

function QrContainer() {
    return (
        <div>
            <div>
                <QrReader
                    delay={100}
                />
            </div>
        </div>
    );
}

export default QrContainer;