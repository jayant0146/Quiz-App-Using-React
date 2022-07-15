import React from "react";

function Page() {
    return (
        <div className="App">
            <h1 className="title"> INTUITIVE QUIZ HUB </h1>

            <h1 className="quiz"> Quiz Settings </h1> <br />
            <img className="image" src="https://apksos.com/storage/images/quizgame/quizearningapp/quizclub/quizgame.quizearningapp.quizclub_1.png" alt="QuizHub"></img>
            <form>
                <h1 className="form">
                    <input type="text" placeholder="Name" className="form"/>
                    <br /> <br />
                    <input type="text" placeholder="Department" className="form"/>
                    <br /> <br />
                    <input type="email" placeholder="EMail" className="form"/>
                    <br /> 
                </h1>
            </form>

            <button className="start"> <a href="http://localhost:3000/firstpage/"> START QUIZ </a> </button>
        </div>
    );
}

export default Page;