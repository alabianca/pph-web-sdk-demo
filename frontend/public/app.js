const status = document.getElementById('status');
const testBtn = document.getElementById('testBtn');

App();

function App() {
    console.log("Init App");

    testBtn.addEventListener("click", toggle);

    // UNCOMMENT THIS, AND IT WILL WORK
    initUIFlow();

    function initUIFlow() {
        console.log("Init UI flow")
        pphwebsdk.Setup.isSetupComplete()
            .then(function() {
                console.log("done")
            })
            .catch(function() {
                console.log("Never initialized before...")
                runUIFlowForFirstTime(function() {
                    console.log("done")
                })
            })
    }

    function runUIFlowForFirstTime(cb) {
        pphwebsdk.Setup.startUIFlow(function() {
            cb()
        })
    }

    function toggle() {
        console.log("toggling...")
        const text = status.textContent === "Off" ? "On" : "Off";
        status.textContent = text;
    }
}