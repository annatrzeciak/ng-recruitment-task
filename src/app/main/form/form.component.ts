import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isError } from 'util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  comment: Comment;
  commentForm: FormGroup;
  private message: any = '';
  private isError: boolean;

  constructor(private mainService: MainService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.commentForm = this.buildCommentForm();
  }
  buildCommentForm() {

    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,3}$')]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      comment: ['', [Validators.required, Validators.minLength(5)]]

    });
  }
  addComment() {

    this.mainService.postData(this.commentForm.value).then(
      message => this.showMessage(message));
    this.commentForm.reset();

  }
  showMessage(message) {
    this.message = message;
    if (message.statusText == 'OK') {
      this.isError = false;
    } else {
      this.isError = true;
    }
  }


}
