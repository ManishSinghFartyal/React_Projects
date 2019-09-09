
export const increase_text_length = length_of_text => ({
    type: 'TEXT_LENGTH',
    payload: length_of_text
})

export const maintain_hits = hits => ({
    type: 'MAINTAIN_HITS',
    payload: hits
})

export const resetAll = () =>({
    type: 'RESET_ALL',    
})