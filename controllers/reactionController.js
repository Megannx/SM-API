const Thought = require('../models/Thought'); // Import the Thought model

const addReaction = async (req, res) => {
    try {
        const { thoughtId } = req.params; // Get the thoughtId from the URL parameters
        const { reactionBody, username } = req.body; // Extract data from the body

        // Validate the incoming data
        if (!thoughtId || !reactionBody || !username) {
            return res.status(400).json({ message: 'Thought ID, reaction body, and username are required.' });
        }

        // Find the thought and add the reaction
        const thought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $push: { reactions: { reactionBody, username } } }, // Add the reaction to the reactions array
            { new: true, runValidators: true }
        );

        if (!thought) {
            return res.status(404).json({ message: 'Thought not found.' });
        }

        res.status(200).json(thought); // Return the updated thought with reactions
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addReaction };