// Check if the riddle body is valid
export function checkRiddleBody(req, res, next){
    const riddle = req.body;

    if (!riddle || !riddle.id || !riddle.type || !riddle.difficulty || !riddle.name || !riddle.taskDescription || !riddle.correctAnswer) { 
        return res.status(400).json({ message: "Riddle body is required" });
    }else if(!riddle.choices){}
    next();   
}