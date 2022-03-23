export type Question {
    
}

export const fetchQuizQuestions =async (amount: number) => {
    
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;

    // console.log(endpoint);

    const data = await( await fetch(endpoint)).json();

    console.log(data);

}