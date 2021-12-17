import EventManagerModel from '../models/EventManagerModel.js';
export const getEventManager = async(req, res) => {
try {
    const eventManager = await EventManagerModel.find();
    res.status(200).json(eventManager);
    
} catch (error) {
    console.log(error);
}
    
}

export const postEventManager = async (req, res) => {
    const body = req.body;

    const newPostManager = new EventManagerModel(body)

    try {
        await newPostManager.save();

        res.status(201).json(newPostManager );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getEventManagerById = async(req, res) => {
    try{
        const eventManager = await EventManagerModel.findById(req.params.id);
        res.status(200).json(eventManager);
    }
    catch(error){
        res.status(500).json({"message": "Error"});
    }
}

export const updateEventManager = async(req, res) => {
    try{
        const eventManager = await EventManagerModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(eventManager);
    }
    catch(error){
        res.status(500).json({"message": "Error"});
    }
}

export const deleteEventManager = async(req, res) => {
    try{
        const eventManager = await EventManagerModel.findByIdAndDelete(req.params.id);
        res.status(200).json(eventManager);
    }
    catch(error){
        res.status(500).json({"message": "Error"});
    }
}