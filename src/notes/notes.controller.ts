import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

@Post()
create(@Body() createNoteDto: CreateNoteDto) {
  // עכשיו ה-createNoteDto הוא אובייקט שמכיל את ה-content
  return this.notesService.create(createNoteDto.content, createNoteDto.title);
}

@Get()
findAll() {
  return this.notesService.findAll();
}
}
