var heading = document.createElement('h1')
        heading.innerHTML = "CALL BACK HELL"
        var div = document.createElement("div");
        var count = 11;
        setTimeout( () => {
            div.innerHTML = "Timer of 10 seconds will start in sometime"
            setTimeout ( () => {
                count--
                div.innerHTML = count
                setTimeout ( () => {
                    count--
                    div.innerHTML = count
                    setTimeout ( () => {
                        count--
                        div.innerHTML = count
                        setTimeout ( () => {
                            count--
                            div.innerHTML = count
                            setTimeout ( () => {
                                count--
                                div.innerHTML = count
                                setTimeout ( () => {
                                    count--
                                    div.innerHTML = count
                                    setTimeout ( () => {
                                        count--
                                        div.innerHTML = count  
                                        setTimeout ( () => {
                                            count--
                                            div.innerHTML = count
                                            setTimeout ( () => {
                                                count--
                                                div.innerHTML = count
                                                setTimeout ( () => {
                                                    count--
                                                    div.innerHTML = count
                                                    setTimeout ( () => {
                                                        div.innerHTML = "Thank you"
                                                    },1000)
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },3000)
        }, 0)
        document.body.append(heading,div)
