<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333333;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        header {
            background: #003366;
            color: #fff;
            padding: 1rem 0;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background: #00b4d8;
            padding: 0.5rem;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 1rem;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .container {
            max-width: 800px;
            margin: 2rem auto;
            padding: 1rem;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        footer {
            text-align: center;
            margin-top: 2rem;
            padding: 1rem;
            background: #003366;
            color: #fff;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bienvenue sur ma page GitHub</h1>
    </header>
    <nav>
        <a href="#about">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container">
        <section id="about">
            <h2>À propos de moi</h2>
            <p>Développeur passionné par le web et les nouvelles technologies. Toujours prêt à apprendre et à relever de nouveaux défis.</p>
        </section>
        <section id="projects">
            <h2>Mes projets</h2>
            <ul>
                <li><a href="#">Projet 1</a></li>
                <li><a href="#">Projet 2</a></li>
                <li><a href="#">Projet 3</a></li>
            </ul>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>Email : <a href="mailto:tonemail@example.com">tonemail@example.com</a></p>
        </section>
    </div>
    <footer>
        <p>© 2024 Ton Nom. Tous droits réservés.</p>
    </footer>
</body>
</html>

