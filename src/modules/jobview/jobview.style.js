
const styles = theme => ({
    container: {
        overflowY: "scroll",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
    },
    jobs: {
        overflowY: "auto",
        position: "sticky",
        top: 0,
        flexShrink: 0,
        backgroundColor: 'white',
        border: '1px solid lightgrey',
    },
    jobDetail: {
        minWidth: "250px",
        padding: "10px",
        cursor: "pointer",
    },
});

export default styles;