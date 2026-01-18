import { IsString, IsNotEmpty, MinLength } from 'class-validator';



export class CreateNoteDto {
  @MinLength(2, { message: 'הכותרת חייבת להכיל לפחות 2 תווים' })
  @IsNotEmpty({ message: 'חובה להזין כותרת' })
  @IsString({ message: 'הכותרת חייבת להיות טקסט' })
  title: string; 

  @MinLength(3, { message: 'הפתק חייב להכיל לפחות 3 תווים' })
  @IsNotEmpty({ message: 'לא ניתן לשמור פתק ריק' })
  @IsString({ message: 'התוכן חייב להיות טקסט' })
  content: string;
}