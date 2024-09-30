const characters = {
    'batman': {
        name: "Bruce Wayne / Batman",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdFoo1gjcYb_gnKXvzxfl9ulIh4GKxd9LPA&s",
        description: "Bruce Wayne is a billionaire playboy who witnessed his parents’ murder as a child, which shaped him into Gotham City’s protector, Batman. Using his wealth, intelligence, and combat skills, he becomes a masked vigilante who battles Gotham's criminal underworld. Batman operates under strict moral codes, refusing to kill, which often puts him at odds with the chaotic world of crime. His dual identity forces him to sacrifice personal happiness for the greater good.",
        fact: "Despite his dark and brooding persona, Bruce is often portrayed as a brilliant detective, earning the title ' World’s Greatest Detective ' in the comics.",

        actor: {
            name: "Christian Bale",
            description: "Christian Bale is known for his intense method acting. For his role in The Dark Knight, he maintained a strict physical regimen to embody Batman’s strength and agility. Bale’s growling Batman voice became iconic, setting him apart from previous portrayals."
        }

    },
    'joker': {
        name: "The Joker",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LClOAApFa2yzIJDNP1Y-7aYhP64wePivjg&s",
        description: "The Joker is an unpredictable and anarchic villain whose sole purpose is to create chaos. He lacks a clear motive for his actions, which makes him all the more terrifying. In The Dark Knight, he wreaks havoc on Gotham, challenging Batman’s moral beliefs. His clownish appearance and disturbing psychological behavior make him one of the most iconic villains in cinema history.",
        fact: "The Joker's appearance, with his smeared face paint and grotesque scars, is symbolic of his chaotic and 'self-made' persona, reflecting how he sees the world.",
        actor: {
            name: "Heath Ledger",
            description: "Heath Ledger’s portrayal of the Joker is legendary, earning him a posthumous Academy Award for Best Supporting Actor. Ledger isolated himself for months to perfect the character’s psychotic behavior and unsettling mannerisms. His performance is widely regarded as one of the greatest in film history."
        }
    },
    'Harvey-Dent': {
        name: "Harvey Dent / Two-Face",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PszsydRBzzqwtwefmF9c1icRHj0E8rXu_Q&s",
        description: "Harvey Dent starts as Gotham's 'White Knight', the district attorney determined to rid the city of crime through the legal system. After a traumatic accident, half of his face is severely burned, and he adopts the persona of Two-Face, a villain obsessed with fate and chance. Two-Face uses a coin to decide whether to show mercy or enact violence, symbolizing his internal conflict between justice and vengeance.",
        fact: "Two-Face’s coin has two sides, with one scarred. He lets the coin decide the fate of his victims, making him one of Batman's most psychologically complex villains.",
        actor: {
            name: "Aaron Eckhart",
            description: "Aaron Eckhart delivers a powerful performance, capturing both the idealism of Harvey Dent and the tragic transformation into Two-Face. Eckhart’s portrayal emphasizes the emotional toll of Dent’s journey from hero to villain, adding depth to the character’s duality."
        },
    },
    'Alfred-pennyworth': {
        name: "Alfred Pennyworth",
        image: "https://heroichollywood.com/wp-content/uploads/2023/10/Michael-Caine-Batman-Begins-Alfred-Pennyworth.jpg",
        description: "Alfred Pennyworth is Bruce Wayne’s loyal butler, father figure, and trusted ally. He provides Bruce with emotional support, sound advice, and a sense of grounding in his dangerous life as Batman. Alfred’s wisdom and humor are crucial to Batman’s success, as he constantly reminds Bruce of the human cost of his mission.",
        fact: "Alfred’s backstory often includes a history in British intelligence, which explains his occasional displays of combat skills and tactical knowledge.",
        actor: {
            name: "Michael Caine",
            description: "Michael Caine’s portrayal of Alfred is warm and witty, bringing a paternal feel to the character. Caine’s chemistry with Christian Bale adds emotional depth to their relationship, making Alfred a key figure in Bruce Wayne’s life."
        }

    },
    'Rachel-dawes': {
        name: "Rachel Dawes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvE9zcGe_3r3TKDXJOy6Tla7r7H8IV2QKx5Q&s",
        description: "Rachel Dawes is Bruce Wayne’s childhood friend and assistant district attorney. She believes in the power of law to bring justice to Gotham. While she loves Bruce, she chooses to support Harvey Dent, believing he is the city's true hope. Rachel’s relationship with Bruce adds a layer of personal conflict to Batman's journey, as she represents the normal life Bruce yearns for but cannot have.",
        fact: "Rachel Dawes is a character created specifically for Christopher Nolan’s Batman trilogy, and she does not appear in the original comic books",
        actor: {
            name: "Maggie Gyllenhaal",
            description: "Maggie Gyllenhaal took over the role of Rachel Dawes from Katie Holmes in The Dark Knight. Gyllenhaal brought a sense of strength and moral conviction to the character, portraying Rachel as a beacon of hope and reason in Gotham’s corrupt environment."
        }
    },
    'James-gordon': {
        name: "James Gordon",
        image: "https://preview.redd.it/hstzf6m6k1z41.jpg?width=1080&crop=smart&auto=webp&s=13dcc0e1b7eab5a13bb1f91b3a727a5b1c295124",
        description: "James Gordon is Gotham City’s police commissioner and one of Batman’s closest allies. He is one of the few honest cops in a city rife with corruption. Gordon works tirelessly to protect Gotham from criminal elements while keeping Batman’s identity secret. His strong sense of justice makes him a critical partner in Batman’s crusade against crime.",
        fact: "In the comics, Gordon has been Batman's ally from the very beginning, often working alongside him to clean up Gotham without ever fully knowing Batman’s true identity.",
        actor: {
            name: "Gary Oldman",
            description: "Gary Oldman’s portrayal of James Gordon is widely praised for its nuance and emotional weight. Oldman captures Gordon’s quiet heroism and moral integrity, making him a standout character in The Dark Knight trilogy."
        }
    },
    'Lucius-fox': {
        name: "Lucius Fox",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdznjCfMtpDyUhLDyea5bbMi2sJnisJcEAQ&s",
        description: "Lucius Fox is the CEO of Wayne Enterprises and the mastermind behind Batman's tech and gadgets. He provides Bruce with the tools necessary for his vigilante work while maintaining the company's public image. Lucius is a man of great integrity, and he carefully manages the balance between his responsibilities at Wayne Enterprises and aiding Batman.",
        fact: "Lucius Fox’s role in the comics is relatively minor, but in The Dark Knight, his expertise and discretion make him indispensable to Bruce Wayne’s crime-fighting efforts.",
        actor: {
            name: "Morgan Freeman",
            description: "Morgan Freeman brings wisdom and gravitas to Lucius Fox, adding a touch of humor and practicality to the character. Freeman’s portrayal is a perfect balance of authority and warmth, making Lucius a beloved supporting character in the trilogy."
        }
    }
};