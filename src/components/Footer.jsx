export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>© 2023 Memory Game. All rights reserved.</p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    text: {
        margin: 0,
    },
};