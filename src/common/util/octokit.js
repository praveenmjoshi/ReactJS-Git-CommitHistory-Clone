import { Octokit } from '@octokit/core';

var octoKit
export const initializeOctoKit = () =>{
    if(!octoKit){
        const token = localStorage.getItem('personalKey');
        octoKit = new Octokit({
            auth: token
        });
    }
    return octoKit
}