from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    projects = [
        {
            "title": "Weather App",
            "description": "A robust web-based inventory management system that enables businesses to track stock levels, manage orders, and generate detailed reports in real time.",
            "technologies": ["Python", "Flask", "SQLite", "Jinja2", "Bootstrap"],
            "github": "https://github.com/spw3bt3ch/ai-weather-app",
            "demo": "https://ai-weather-app-p7qr.onrender.com/",
            "image": "images/weather.png",
        },
        {
            "title": "Finance Tracker",
            "description": "A fully functional finance tracker for organizations, supporting inbox management, compose, reply, and attachment functionalities.",
            "technologies": ["Python", "Flask", "SQLite", "REST API", "JavaScript"],
            "github": "https://github.com/spw3bt3ch/finance-trkr",
            "demo": "https://github.com/spw3bt3ch/finance-trkr",
            "image": "images/finance-trckr.png",
        },
        {
            "title": "Portfolio Platform for Designers",
            "description": "A dynamic portfolio web application built for creative designers to showcase their work, attract clients, and manage project galleries.",
            "technologies": ["Python", "Flask", "Tailwind CSS", "SQLite", "Jinja2"],
            "github": "https://github.com/spw3bt3ch",
            "demo": "https://graphics-designers-portfolio-websit.vercel.app/",
            "image": "images/graphics-design.png",
        },
        {
            "title": "Health Radar",
            "description": "A modern Flask web application for evaluating 14 key health metrics including BMI, cardiovascular health, stroke risk, metabolic health, respiratory health, and more.",
            "technologies": ["Python", "Flask", "SQLite", "Jinja2", "Bootstrap"],
            "github": "https://github.com/spw3bt3ch",
            "demo": "https://health-plus-v1u7.onrender.com/",
            "image": "images/health-radarr.png",
        },
    ]

    skills = {
        "Backend": ["Python", "Flask", "FastAPI", "REST APIs"],
        "Frontend": ["HTML5", "Tailwind CSS", "JavaScript", "Jinja2"],
        "Database": ["SQLite", "PostgreSQL", "MySQL"],
        "Tools": ["Git", "GitHub", "Vercel", "Docker"],
    }

    services = [
        {
            "icon": "🖥️",
            "title": "Backend Development",
            "description": "Scalable, secure, and high-performance backend systems using Python, Flask, and FastAPI tailored to your business needs.",
        },
        {
            "icon": "🌐",
            "title": "Fullstack Web Development",
            "description": "End-to-end web applications with clean frontends and robust backends, from design to deployment.",
        },
        {
            "icon": "🔗",
            "title": "API Development",
            "description": "Custom RESTful APIs that power mobile apps, web clients, and third-party integrations with full documentation.",
        },
        {
            "icon": "⚙️",
            "title": "Custom Software Development",
            "description": "Bespoke software solutions engineered from scratch to solve unique business challenges efficiently.",
        },
        {
            "icon": "🤖",
            "title": "Automation Systems",
            "description": "Intelligent automation tools and scripts that eliminate repetitive tasks and streamline operations at scale.",
        },
        {
            "icon": "🎨",
            "title": "Graphics & Product Design",
            "description": "Creative visual solutions spanning brand identity, UI/UX design, and product graphics — delivering stunning, user-centred designs that communicate and convert.",
        },
    ]

    return render_template("index.html", projects=projects, skills=skills, services=services)


@app.route("/ai-training")
def ai_training():
    return render_template("genai_training.html")


# Legacy redirect — keep old URL working
@app.route("/women-ai-training")
def women_ai_training():
    from flask import redirect
    return redirect("/ai-training")


if __name__ == "__main__":
    app.run(debug=True)
