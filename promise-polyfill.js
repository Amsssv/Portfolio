function Promise(handler){
    let status = "pending";
    let value = null;

    const resolve = value => {
        if (status === "pending") {
            status = "fulfilled";
            value = value;
        }
    };
    const reject = value => {
        if (status === "pending") {
            status = "rejected";
            value = value;
        }
    };

    try {
        handler(resolve, reject);
    } catch (err) {
        reject(err);
    }

    return {
        then: function (onFulfilled, onRejected){
            if (status === "fulfilled") {
                onFulfilled(this.value);
            } else if (this.status === "rejected") {
                onRejected(this.value);
            }
        }
    }
}

new Promise((resolve, reject)=>{

})