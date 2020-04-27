const Part = require('../models/part-model')

createPart = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a part',
        })
    }

    const part = new Part(body)

    if (!part) {
        return res.status(400).json({ success: false, error: err })
    }

    part
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: part._id,
                message: 'Part created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Part not created!',
            })
        })
}

updatePart = async (req, res) => {
    
    

}

deletePart = async (req, res) => {


}

getParts = async (req, res) => {
    await Part.find({}, (err, parts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!parts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Part not found` })
        }
        return res.status(200).json({ success: true, data: parts })
    }).catch(err => console.log(err))
}

module.exports = {
    createPart,
    updatePart,
    deletePart,
    getParts,
    getPartById,
}