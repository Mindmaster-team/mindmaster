document.addEventListener("DOMContentLoaded", function() {
    const gifs = [
        { name: "Eat", url: "assets/gif/eat.gif", description: "['Eat', 'banana_3']: Eat banana_3." },
        { name: "FollowPointing", url: "assets/gif/follow_pointing.gif", description: "['FollowPointing', 'agent 2']: Follow agent 2's pointing to banana_3." },
        { name: "Give..To..", url: "assets/gif/give_to.gif", description: "['Give..To..', 'key_3', 'agent 2']: Give key_3 to agent 2." },
        { name: "Grab", url: "assets/gif/grab.gif", description: "['Grab', 'dumbbell_3']: Grab dumbbell_3." },
        { name: "MoveTo", url: "assets/gif/move_to.gif", description: "['MoveTo', 'cup_3']: Move to cup_3." },
        { name: "MoveToAttention", url: "assets/gif/move_to_attention.gif", description: "['MoveToAttention', 'agent 2']: Move to agent 2's attention field." },
        { name: "NodHead", url: "assets/gif/nod_head.gif", description: "['NodHead']: Nod head." },
        { name: "Open", url: "assets/gif/open.gif", description: "['Open', 'box_3']: Open box_3." },
        { name: "PointTo", url: "assets/gif/point_to.gif", description: "['PointTo', 'shelf_3']: Point to shelf_3." },
        { name: "Put..Into..", url: "assets/gif/put_into.gif", description: "['Put..Into..', 'banana_3', 'shelf_4']: Put banana_3 into shelf_4." },
        { name: "Put..Onto..", url: "assets/gif/put_onto.gif", description: "['Put..Onto..', 'dumbbell_3', 'table_4']: Put dumbbell_3 onto table_4." },
        { name: "Put..Down", url: "assets/gif/put_down.gif", description: "['Put..Down', 'banana_3']: Put down banana_3." },
        { name: "RotateTo", url: "assets/gif/rotate_to.gif", description: "['RotateTo', 'banana_3']: Rotate to banana_3." },
        { name: "ShakeHead", url: "assets/gif/shake_head.gif", description: "['ShakeHead']: Shake head." },
        { name: "Smash", url: "assets/gif/smash.gif", description: "['Smash', 'cup_3']: Smash cup_3." },
        { name: "Speak", url: "assets/gif/speak.gif", description: "['Speak', 'Hello']: Speak the word 'Hello'." },
        { name: "Unlock", url: "assets/gif/unlock.gif", description: "['Unlock', 'box_4', 'key_3']: Unlock box_4 with key_3." },
        { name: "WaveHand", url: "assets/gif/wave_hand.gif", description: "['WaveHand']: Wave hand." },
        { name: "PerformEat", url: "assets/gif/perform_eat.gif", description: "['Perform', 'Eat']: Perform eating." },
        { name: "PerformDrink", url: "assets/gif/perform_drink.gif", description: "['Perform', 'Drink']: Perform drinking." }, 
        { name: "Play", url: "assets/gif/play.gif", description: "['Play', 'chess_3', 'agent_2']: Play chess_3 with agent_2. "}, 
        { name: "Close", url: "assets/gif/close.gif", description: "['Close', 'shelf_3']: Close shelf_3. "}
        // Add more GIFs as needed
      ];

    const intents = [
        { name: "Observe", url: "None", description: "['Observe', 'sb/sth']: Collect information about someone or something by observing." },
        { name: "Give..To..", url: "None", description: "['Give..To..', 'sth', 'sb']: Give something to someone." },
        { name: "Get..From..", url: "None", description: "['Get..From..', 'sth', 'sw/sb']: Obtain something from somewhere/somebody." },
        { name: "Find", url: "None", description: "['Find', 'sb/sth']: Locate someone or something." },
        { name: "Open", url: "None", description: "['Open', 'sth']: Open something." },
        { name: "Put..Into..", url: "None", description: "['Put..Into..', 'sth_1', 'sth_2']: Place something_1 into something_2." },
        { name: "Put..Onto..", url: "None", description: "['Put..Onto..', 'sth_1', 'sth_2']: Place something_1 onto something_2." },
        { name: "Play..With..", url: "None", description: "['Play..With..', 'sth', 'sb']: Play something with someone." },
        { name: "RespondTo", url: "None", description: "['RespondTo', 'sb']: Respond to someone's signal." },
        { name: "Inform", url: "None", description: "['Inform', 'sb', 'sth']: Let someone know something." },
        { name: "Greet", url: "None", description: "['Greet', 'sb']: Send a social signal to someone." },
        { name: "Help", url: "None", description: "['Help', 'sb', 'intent']: Assist someone with an intent." },
        { name: "RequestHelp", url: "None", description: "['RequestHelp', 'sb', 'intent']: Request someone's help to complete an intent." },
        { name: "Harm", url: "None", description: "['Harm', 'sb', 'intent']: Prevent someone from completing an intent." }, 
    ];

    const values = [
        { name: "Active", url: "None", description: "Active: Whether you prefer physical motion or not. We have three values: \"inactive\"(😴), \"neutral\"(🧘) and \"active\"(🏃). " },
        { name: "Social", url: "None", description: "Social: Whether you prefer social interaction or not. We have three values: \"unsocial\"(🫣), \"neutral\"(😐) and \"social\"(🤗)." },
        { name: "Helpful", url: "None", description: "Helpful: Whether you want to help others or not. We have four values: \"harmful\"(😈), \"unhelpful\"(🙅🏻‍♀️), \"helpful\"(👼) and \"very helpful\"(👼👼)." },
    ]

    const QA = [
        { name: "Can an agent hold multiple objects at the same time?", url: "None", description: "Can an agent hold multiple objects at the same time?: Yes, an agent can hold multiple objects at once. Even if the agent is already holding something, it can still grab (\"Grab\") new objects." },
        { name: "Can a container hold multiple objects?", url: "None", description: "Can a container hold multiple objects?: Yes, containers (such as boxes and shelves) can hold multiple objects at the same time." },
        { name: "Why does a semi-transparent object disappear when I see it?", url: "None", description: "Why does a semi-transparent object disappear when I see it?: A semi-transparent object means it was in that position in your memory, but when you look at it and find it is no longer there, it disappears." },
        { name: "Why did an agent in my view suddenly disappear?", url: "None", description: "Why did an agent in my view suddenly disappear?: This is because the agent left your line of sight, and you cannot determine where it went." },
        { name: "Why did I suddenly have an object in my hand or observe a physical state change?", url: "None", description: "Why did I suddenly have an object in my hand or observe a physical state change?: In our game, only agents can change the state of objects. If you notice an object state change without seeing an agent's action, it is likely that another agent performed the action out of your sight." },
        { name: "Why did a semi-transparent agent suddenly appear in my belief?", url: "None", description: "Why did a semi-transparent agent suddenly appear in my belief?: This is because the agent performed an active action (such as speaking) that allowed you to determine its position." },
        { name: "Should I focus on completing tasks or aligning with values when playing this game?", url: "None", description: "Should I focus on completing tasks or aligning with values when playing this game?: 1. If your character's persona does not conflict with the initial intent, please complete the initial intent according to your persona. 2. If there is a conflict, immerse yourself in the role and situation to make reasonable decisions." },
        { name: "How should I estimate others' intentions?", url: "None", description: "How should I estimate others' intentions?: You only need to write the highest-level intention you can estimate for another agent, not the lower-level sub-intentions. For example, if you estimate agent 2's low-level intention is ['Open','box_2'], but the high-level intention is ['Get','books_3', 'box_2'] (i.e., agent 2 wants to open box_2 to get books_3), then you should write agent_2's intention as ['Get', 'books_3', 'box_2'], not ['Open','box_2']." },
        { name: "What should I do if I can't estimate others' intentions?", url: "None", description: "What should I do if I can't estimate others' intentions?: If you have no idea, just choose 'NA'." },
        { name: "What should I do if I think there are many possible intentions for someone?", url: "None", description: "What should I do if I think there are many possible intentions for someone?: Choose the most likely one as your guess." },
        { name: "How should I update my intention?", url: "None", description: "How should I update my intention?: 1. If the minion's value distribution is unsocial and inactive, and there is an initial intention, how should the intention be updated?\n a) Value the social dimension more and do not seek help, the minion completes it independently;\n b) Value the active dimension more and try to seek help;\n c) Value the value itself rather than the initial intention, update intention to none;\n 2. If the minion's value distribution is social and inactive, and there is an initial intention, and you estimate the other is unhelpful, how should the intention be updated?\n a) Value the active dimension more, update intention to none;\n b) Value the realization of the intention, the minion completes it independently;\n 3. If the minion's value distribution is very helpful, unsocial, inactive, and there is no initial intention, and you guess the other is looking for something and the minion knows where it is, how should the intention be updated?\n a) Value helpful and social dimensions, help the other and use active (non-social) actions to help;\n b) Value helpful and active dimensions, help the other and use social actions to help." },
        { name: "What should I do if my intention conflicts with my values?", url: "None", description: "What should I do if my intention conflicts with my values?: When the minion's value distribution conflicts with the current intention, you can choose to reasonably adjust the intention or stick to the current intention; as long as you fully immerse yourself in the role and make reasonable decisions based on the specific situation." },
        { name: "How can I freely move to any position?", url: "None", description: "How can I freely move to any position?: When choosing MoveTo or RotateTo, you can select the position or direction you want by clicking on the screen." },
        { name: "When does the game end?", url: "None", description: "When does the game end?: The game ends when the final round is reached or both you and another agent have achieved your initial intentions." },
        { name: "How can I get rewards?", url: "None", description: "How can I get rewards?: 1. Fully immerse yourself in your role, act according to your initial intention (if any) and value settings, and make reasonable choices. 2. If there is a conflict between your persona and the initial intention, immerse yourself in the role and situation to make reasonable decisions." },

    ]

    // const categories = [
    //     { title: "Active Level 1", indexes: [0, 3, 4, 14] },
    //     { title: "Active Level 2", indexes: [9, 11, 15, 17, 19, 20, 21] },
    //     { title: "Active Level 3", indexes: [1, 5, 6, 10, 12, 13, 16, 18] },
    //     { title: "Active Level 4", indexes: [2, 7, 8] },
    // ];

    const categories = [
        {title: "All actions", indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]}, 
        {title: "All intents", indexes: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113]}, 
        {title: "All values", indexes: [200, 201, 202]},
        {title: "FAQ", indexes: [300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314]}
    ]

    const nav = document.querySelector('.mysidebar');
    const gallery = document.querySelector('.gallery');

    const gallery_gif = document.getElementById('gallery_gif');
    const gallery_intent = document.getElementById('gallery_intent');
    const gallery_value = document.getElementById('gallery_value');
    const gallery_qa = document.getElementById('gallery_qa');

    const nav_gif = document.getElementById('sidebar_action');
    const nav_intent = document.getElementById('sidebar_intent');
    const nav_value = document.getElementById('sidebar_value');
    const nav_qa = document.getElementById('sidebar_qa');

    const gallery_dict = {
        "gallery_gif": gallery_gif, 
        "gallery_intent": gallery_intent, 
        "gallery_value": gallery_value, 
        "gallery_qa": gallery_qa, 
    }

    const nav_dict = {
        "nav_gif": nav_gif, 
        "nav_intent": nav_intent, 
        "nav_value": nav_value, 
        "nav_qa": nav_qa, 
    }

    // Create all categories
    function createCategories(categories, nav_dict, gallery_dict) {
        categories.forEach(category => {
            createCategoryItem(category.title, category.indexes, nav_dict, gallery_dict);
        });
    }

    // Create a single category and its items
    function createCategoryItem(title, indexes, nav_dict, gallery_dict) {
        const categoryItem = document.createElement('li');
        categoryItem.textContent = title;
        categoryItem.style.color = "white"; 
        // nav.appendChild(categoryItem);

        const childContainer = document.createElement('ul');
        childContainer.style.display = 'block'; // Show children by default
        categoryItem.appendChild(childContainer);

        indexes.forEach(index => {
            let gif; 
            if (index >= 300) {
                gif = QA[index - 300]; 
            }
            else if (index >= 200) {
                gif = values[index - 200]; 
            }
            else if (index >= 100 ) {
                gif = intents[index - 100]; 
            }
            else {
                gif = gifs[index];
            }
            const listItem = document.createElement('li');
            
            listItem.textContent = gif.name;
            listItem.style.color = "white"; 
            listItem.onclick = (event) => {
                highlightGif(index);
                event.stopPropagation();  // Prevent event bubbling
            };
            childContainer.appendChild(listItem);

            const gifItem = document.createElement('div');
            gifItem.classList.add('gif-item');
            gifItem.id = `gif-${index}`;
            // const formattedDescription = gif.description.replace(/: /, ': \n');

                // Split description into command and explanation, add color
            const parts = gif.description.split(': ');
            const command = parts[0];
            let explanation
            if (parts.length == 2){
                explanation = parts[1];
            }
            else if (parts.length == 3){
                explanation = parts[1] + parts[2];
            }
            
            const formattedDescription = `<span class="command">${command}</span> \n <span class="explanation">${explanation}</span>`;

            if (gif.url == "None"){
                gifItem.innerHTML = `<p>${formattedDescription}</p>`;
                if (index >= 300) {
                    gallery_dict["gallery_qa"].appendChild(gifItem)
                    nav_dict["nav_qa"].appendChild(categoryItem);
                }
                else if (index >= 200) {
                    gallery_dict["gallery_value"].appendChild(gifItem)
                    nav_dict["nav_value"].appendChild(categoryItem);
                }
                else {
                    gallery_dict["gallery_intent"].appendChild(gifItem)
                    nav_dict["nav_intent"].appendChild(categoryItem);
                }
            }
            else {
                gifItem.innerHTML = `<img src="${gif.url}" alt="${gif.name}"><p>${formattedDescription}</p>`;
                gallery_dict["gallery_gif"].appendChild(gifItem)
                nav_dict["nav_gif"].appendChild(categoryItem);
            }

            const descriptionElement = gifItem.querySelector('p');
            if (descriptionElement) {
                descriptionElement.style.whiteSpace = 'pre-wrap';
            }
        });

        categoryItem.onclick = () => {
            const isVisible = categoryItem.getAttribute('data-visible') === 'true';
            childContainer.style.display = isVisible ? 'none' : 'block';
            categoryItem.setAttribute('data-visible', isVisible ? 'false' : 'true');
        };
    }

    function highlightGif(index) {
        document.querySelectorAll('.gif-item').forEach(item => item.classList.remove('active'));
        document.querySelector(`#gif-${index}`).classList.add('active');
        // Scroll to the specified GIF
        document.querySelector(`#gif-${index}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Example usage
    createCategories(categories, nav_dict, gallery_dict);

});

// Get the button element
var backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls, check the scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Show the button when scrolling down more than 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks the button, scroll to the top
backToTopBtn.onclick = function() {
    // Use smooth scrolling
    window.scrollTo({top: 0, behavior: 'smooth'});
};