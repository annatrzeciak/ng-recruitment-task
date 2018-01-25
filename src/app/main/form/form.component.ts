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
  message: any = '';
  private isError: boolean;
  showSpinner: boolean = true;

  constructor(private mainService: MainService, private router: Router,
    private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.showSpinner = true;

  }

  ngOnInit() {

    this.commentForm = this.buildCommentForm();
    this.showSpinner = false;
  }
  buildCommentForm() {

    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      comment: ['', [Validators.required, Validators.minLength(2)]]

    });

  }
  addComment() {
    this.showSpinner = true;
    this.mainService.postData(this.commentForm.value).then(
      message => this.showMessage(message));


  }
  showMessage(message) {
    this.commentForm.reset();
    this.showSpinner = false;
    this.message = message;
    if (message.statusText == 'OK') {
      this.isError = false;
    } else {
      this.isError = true;
    }
  }


}
