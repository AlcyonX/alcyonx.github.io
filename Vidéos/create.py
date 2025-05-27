import os
import re

# Liste des titres H2
titres_h2 = [
    "Comment installer roblox studio ?",
    "Comment publier son jeu roblox ?",
    "Comment freeze un objet ?",
    "Comment créer une playlist de musique ?",
    "Comment empecher le joueur de sauter",
    "Comment avoir hd admin ?",
    "Comment créer un badge de bienvenue ?",
    "Comment recréer Only UP ?",
    "Comment créer un feu ?",
    "Comment spawn un vehicule ?",
    "Comment faire voler le joueur ?",
    "Comment créer un système de transformation ?",
    "Comment créer un screamer ?",
    "Comment créer une safe zone ?",
    "Comment rendre son jeu ultra réaliste ?",
    "Comment créer un bateau ?",
    "Comment générer une map ?",
    "Comment créer une map réaliste ?",
    "Comment créer un cycle jour et nuit ?",
    "Comment créer un tueur ?",
    "Comment créer un avatar de départ ?",
    "Comment créer un écran de chargement ?",
    "Comment réapparaitre instantanément ?",
    "Comment mettre une musique de fond ?",
    "Comment faire un tremblement de terre ?",
    "Comment faire un double saut ?",
    "Comment créer de l'argent ?",
    "Comment créer une invasion de zombies ?",
    "Comment créer FLOOR IS LAVA ?",
    "Comment créer des TSUNAMI ?",
    "Comment créer des équipes ?",
    "Comment créer un parcours infini ?",
    "Comment appuyer sur E pour récuperer un objet ?",
    "Comment créer un 'KILL PART' ?"
]

# Fonction pour créer des noms de fichiers valides
def create_valid_filename(title):
    # Remplace les espaces par des tirets
    filename = title.replace(' ', '-')
    # Retire les caractères spéciaux
    filename = re.sub(r'[^\w\-]', '', filename)
    return filename

# Crée des fichiers HTML pour chaque titre
for titre in titres_h2:
    # Crée un nom de fichier valide
    filename = create_valid_filename(titre) + '.html'
    # Contenu du fichier HTML
    html_content = f"""
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{titre}</title>
        <link rel="stylesheet" href="../style.css">
        <link rel="icon" href="../Images/X.png">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"></script> <script>hljs.highlightAll();</script>

    </head>
    <body class="c">
        <ul class="topnav">
            <img class="x" src="../Images/X.png" alt="">
            <a href="../index.html">Accueil</a>
            <a href="index.html">Vidéos</a>
            <a href="../about.html">À propos</a>
        </ul>
        
        <div class="bt">
            <h1>{titre}</h1>

            <h2>Vidéo
</h2>

            <iframe style="width: 75%; height: 500px; border: 0px; padding-left: 25px; padding-right: 25px; background-color: black; overflow: hidden;"
            src="https://www.youtube.com/embed/GrwZw_uqLv8?autoplay=1&mute=1">
            </iframe>

            <h2>Lien</h2>
            <a href=""> <img class="icon" src="../Images/link.png" style="padding:0px; padding-right:10px;">Installer Roblox Studio</a>

            <h2>Et voilà !</h2>
            <p>
            Bravo ! Vous avez termine !
            <img class="icon" src="../Images/heart.png" style="padding:0px; height: 20px; width: 20px;">
            <img class="icon" src="../Images/heart.png" style="padding:0px; height: 20px; width: 20px;">
            <img class="icon" src="../Images/heart.png" style="padding:0px; height: 20px; width: 20px;">
            </p>

        </div>
    </body>
    </html>
    """
    # Écrit le contenu dans le fichier
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(html_content)

print("Les fichiers HTML ont été créés avec succès.")
