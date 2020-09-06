import { Component, OnInit, Input} from '@angular/core';
import { Restaurants } from 'src/app/Models/restaurants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.scss']
})
export class DetailRestaurantComponent implements OnInit {

  @Input() restaurant: Restaurants;
  form: FormGroup;
  siderWidth = 120;
  contentHeight = 200;
  id = -1;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      reservationDate: [new Date(), Validators.required],
      reservationHour: [new Date(), Validators.required],
      people: [1, Validators.required],
    });
  }

  onSideResize({ width }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.siderWidth = width!;
    });
  }

  onContentResize({ height }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.contentHeight = height!;
    });
  }

  data(): void {
    this.validForm();
  }

  validForm(): void {
    for (const key in this.form.controls) {
      if (Object.prototype.hasOwnProperty.call(this.form.controls, key)) {
        const element = this.form.controls[key];
      }
    }
  }
}
