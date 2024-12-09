<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Simple</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* Styles globaux */
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            background-color: #f4f4f9;
            color: #333;
        }
        nav {
            background: #007bff;
            color: #fff;
            padding: 1rem 0;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }
        nav ul li {
            margin: 0 1rem;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
        }
        nav ul li a:hover {
            color: #f0f0f0;
        }
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        section {
            padding: 2rem;
            border-bottom: 1px solid #ddd;
        }
        section h2 {
            margin-top: 0;
            color: #007bff;
        }
        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            justify-content: center;
        }
        .project-card {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        .project-card:hover {
            transform: scale(1.05);
        }
        .project-card a {
            display: inline-block;
            margin-top: 1rem;
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
        }
        .project-card a:hover {
            text-decoration: underline;
        }
        #contact a {
            color: #007bff;
            text-decoration: none;
        }
        #contact a:hover {
            text-decoration: underline;
        }
        footer {
            text-align: center;
            padding: 1rem;
            background: #007bff;
            color: white;
            margin-top: 1rem;
        }
        @media (max-width: 600px) {
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            nav ul li {
                margin: 0.5rem 0;
            }
            section {
                padding: 1rem;
            }
            .project-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="#about"><i class="fas fa-user"></i> À propos</a></li>
            <li><a href="#projects"><i class="fas fa-project-diagram"></i> Projets</a></li>
            <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="about">
            <h2>À propos de moi</h2>
            <p>
                Salut ! Je suis un développeur full-stack avec une passion pour la création de projets innovants.
                Toujours en quête d'apprentissage et d'amélioration.
            </p>
        </section>
        <section id="projects">
            <h2>Mes projets</h2>
            <div class="project-grid">
                <div class="project-card">
                    <h3>Projet 1</h3>
                    <p>Un projet incroyable basé sur React et Node.js.</p>
                    <a href="#">Voir le projet</a>
                </div>
                <div class="project-card">
                    <h3>Projet 2</h3>
                    <p>Un outil de gestion conçu avec Python et Flask.</p>
                    <a href="#">Voir le projet</a>
                </div>
                <div class="project-card">
                    <h3>Projet 3</h3>
                    <p>Un site dynamique réalisé avec Next.js.</p>
                    <a href="#">Voir le projet</a>
                </div>
            </div>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>Email : <a href="mailto:tonemail@example.com">tonemail@example.com</a></p>
            <p>LinkedIn : <a href="https://linkedin.com/in/tonprofil" target="_blank">tonprofil</a></p>
        </section>
    </main>
    <footer>
        <p>© 2024 Ton Nom. Fait avec ❤️ et du code.</p>
    </footer>
</body>
</html>
