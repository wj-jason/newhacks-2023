# newhacks-2023: Baby AI

Looking to push the boundaries of accessible education, introducing **Baby AI**

Baby AI is a GPT-powered educational aid that creates customized problem sets for all your courses!

Just provide a PDF of your class notes and Baby will generate you a problem set in no time! 

## How does it work?

Baby AI currently uses GPT-3.5-Turbo to power its problem set generation. Each PDF is parsed and its text is extracted, before being supplied to GPT as a prompt. The system prompt is set up as follows:

```
You are a problem set writer. Given a set of class notes, compile a problem set based on the relevant content. 
The output must be in GFM format so it can be easily exported as a PDF file. 
The conversion will happen through Pandoc, ensure no text overflows.
Show the problem set at the top, and the solution set at the bottom.
The problem set must contain {num_mcq} multiple choice questions and {num_long} long answer questions.
```

The plain text output is then processed and formatted into a nice PDF file through Pandoc!

## Why is this useful? (+ inspiration behind )

As stated above, Baby AI and the team behind it are looking to push accessible education by providing educational resources while only requiring an internet connection! (this is not fully true yet, requests are currently being made through a team members OpenAI account)

Created with [LearnFreely](https://learnfreely.ca), inspiration for Baby AI came as a means to address a gap in LearnFreely's mentorship operations. LearnFreely was set up to provide free mentorships for high school students in areas that generally lacked educational support. As students from around the province poured in, we found that we lacked the physical resources to provide the best help possible. As such, some keen mentors decided to take the initative and begin writing problem sets by themselves, creating the spark that (with the help of NewHacks) would become Baby AI!

Though very much still in its proof-of-concept phases, we hope to one day deploy Baby AI for use by LearnFreely's mentors to continue pushing our mission and providing others with services unavailable to us. 

## What's next?

Baby AI still has a long way to go.

For starters, we are currently powered through GPT-3.5-Turbo, a model that has been outperformed by certain competitors. Furthermore, the model lacks fine-tuning leading to unreliable results that do not exactly follow the prompt. Experimentation with GPT-4 has shown promising results, with the quality of problems and formatting being significantly higher, however the cost makes a full GPT-4-powered deployment currently unfeasible. Llama 2 is another route we have been considering, however the large difference in method of API calls (and just general lack of experience) made the team decide to stick to GPT for NewHacks purposes. 

