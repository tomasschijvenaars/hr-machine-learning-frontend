

const styles = theme => ({
    container: {
        backgroundColor: 'red'
    },
    tipsSection: {
        backgroundColor: '#F5F5F5',
        
    },
    howButtons: {
        width: 125,
        height: 150,
        backgroundColor: "black",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minWidth: '100%',
        maxWidth: '125px'
    },
    steps: {
        backgroundColor: "#72BEAE",
        padding: '5px',
        color: 'white',
        borderRadius: '5px',
        fontSize:'16px' ,
        width: '100%',
        maxWidth: '125px'
    },
    icons: {
        zIndex: '8',
        width:'125px',
        color: 'white',
        fontSize:'60px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tips: {
        minWidth: '100%',
        backgroundColor: '#F5F5F5',
        minHeight: "150px",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
