from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import gynecologists

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the gynecologists route
app.include_router(gynecologists.router)
