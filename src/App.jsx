import './App.css';

function App() {
    return (
        <div className='app-background'>
            <header className='app-header'>
                <div className='header-title-row'>
                    <img src='/sparkle-orange.svg' alt='Sparkle logo' className='sparkle-logo' />
                    <h1>monkeyquiz</h1>
                </div>
                <p className='subtitle'>Challenge yourself and your friends with fresh AI-generated quizzes every day!</p>
            </header>
            <main className='main-content'>
                <button className='start-quiz-btn'>Start Quiz</button>
            </main>
        </div>
    );
}

export default App;
