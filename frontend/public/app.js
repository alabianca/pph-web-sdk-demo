const status = document.getElementById('status');
const testBtn = document.getElementById('testBtn');

App();

function App() {
    console.log("Init App");

    testBtn.addEventListener("click", toggle);



    function initUIFlow() {
        pphwebsdk.Setup.isSetupComplete()
            .then(() => {
                console.log("done")
            })
            .catch(() => {
                console.log("Never initialized before...")
                runUIFlowForFirstTime(() => {
                    console.log("done")
                })
            })
    }

    function runUIFlowForFirstTime(cb) {
        pphwebsdk.Setup.startUIFlow(() => {
            cb()
        })
    }

    function toggle() {
        const text = status.textContent === "Off" ? "On" : "Off";
        status.textContent = text;
    }
}