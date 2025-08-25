from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel

app = FastAPI(title="Sugarcane AI Service", version="0.0.1")


class DiseaseOut(BaseModel):
    label: str
    confidence: float
    advice_text: str


@app.get("/")
def root():
    return {"status": "ok", "service": "ai"}


@app.post("/predict", response_model=DiseaseOut)
async def predict(image: UploadFile = File(...)):
    # TODO: run real model here
    return DiseaseOut(
        label="Red Rot (stub)", confidence=0.82,
        advice_text="Remove infected clumps, apply recommended fungicide, improve drainage."
    )
