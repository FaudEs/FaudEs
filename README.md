<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation et Sections</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
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
