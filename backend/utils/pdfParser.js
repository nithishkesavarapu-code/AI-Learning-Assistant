import fs from 'fs/promises';
import { PDFParse } from 'pdf-parse';

/**
 * Ectract text from PDF file
 * @param {string} filepath-path to PDF file
 * @returns {Promise<{text: String,numPages:number}>}
*/
export const extractTextFromPDF=async(filepath)=>{
    try{
        const dataBuffer=await fs.readFile(filepath)
        //pdf-parser expects a unit8Array, not a Buffer
        const parser=new PDFParse(new Uint8Array(dataBuffer));
        const data=await parser.getText();

        return{
            text:data.text,
            numPages:data.numpages,
            info:data.info,
        }
    }catch(error){
        console.error("PDF parsing error:",error)
        throw new Error("Failed to extract text from PDF")
    }
}