### 组件使用

```javascript

 const formSubmit = (values) => {
     console.log("formSubmit -> values", values)
  }

  <DForm submit={formSubmit.bind(this)}
      options={
        [
          {
              labelCol: 10,
              wrapperCol: 14,
              colSpan: 12,
              label: '船号',
              data: shipNoList,
              formItemType: 'select',
              placeholder: '请选择船号',
              required: true,
              key: 'shipNo',
              disabled: props['disabled'],
              value: formData['shipNo'],
              callback: {
                onChange(value) {
                  setFormData({ shipNo: value })
                  queryMeasureInfoShipByShipId(value)
                }
              }
          },
          {
            labelCol: 10,
              wrapperCol: 14,
              colSpan: 12,
              required: false,
              label: '供应商',
              formItemType: 'input',
              key: 'supplierName',
              disabled: props['disabled'],
              placeholder: '请输入供应商',
              value: formData['supplierName'],
              callback: {
                onChange(value) {
                  setFormData({ ...formData, ...{ supplierName: value } })
                }
              }
          },
          {
              labelCol: 10,
              wrapperCol: 14,
              colSpan: 12,
              label: '采样日期',
              formItemType: 'datePicker',
              placeholder: '请选择采样日期',
              required: true,
              key: 'simplingData',
              disabled: props['disabled'],
              value: formData['simplingData'],
              disabledDate: { "type": '2', "startDisabledDate": moment(formData.inTime).subtract(1, 'days'), "endDisabledDate": new Date() },
              callback: {
                onChange(value) {
                  setFormData({ ...formData, ...{ simplingData: value } })
                }
              }
          },
          {
              labelCol: 10,
              wrapperCol: 14,
              colSpan: 12,
              label: '采样重量(kg)',
              formItemType: 'inputNumber',
              placeholder: '请输入重量',
              required: true,
              key: 'simplingWeight',
              min: 0,
              max: 10000,
              value: formData['simplingWeight'],
              callback: {
                onChange(value) {
                  setFormData({ ...formData, ...{ simplingWeight: value } })
                }
              }
          },
          {
              labelCol: 10,
              wrapperCol: 14,
              colSpan: 12,
              label: '采样人',
              formItemType: 'user',
              placeholder: '请选择采样人',
              required: true,
              key: 'samplingPerson',
              value: formData['samplingPerson'],
              callback: {
                onSubmit(values) {
                  if (values) {
                    let userStr = [] as any
                    values.map(key => {
                      userStr.push(key.name)
                    })
                    setFormData({ ...formData, ...{ samplingPerson: userStr.join(',') } }
                    )
                  }

                }
              }
          },
           {
              colSpan: 24,
              labelCol: 5,
              wrapperCol: 19,
              label: '附件',
              formItemType: 'upload',
              url: `/web/fileupload/upload.form?bizType=ShipEnter/ShipMeasureManager/Deduct&bizId=null&uploadType=1&lastModified=${moment(new Date()).format('YYYY-MM-DD')}&subPath=ShipEnter`,
              accept: '.doc,.docx,.xls,.xlsx,.pdf,.rtf,.png,.jpg',
              listType: "picture-card",
              maxFileList: 5,
              required: true,
              uploadText: '附件上传',
              value: formData['waterFile'],
              defaultFileList: defaultFileList(props.formData, 'waterFile'),
              key: 'waterFile'
          }
        ]
      }>

    </DForm>

```

| 参数    | 说明            | 类型                                                                                                                                                                       |                                                                                                                                                                                                                                                                 |
| ------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options | 传入配置        | Array[]                                                                                                                                                                    |
|         | colSpan         | 栅格比例                                                                                                                                                                   | Number                                                                                                                                                                                                                                                          |
|         | labelCol        | 设置 label 宽度                                                                                                                                                            | Number                                                                                                                                                                                                                                                          |
|         | wrapperCol      | 设置 输入框宽度                                                                                                                                                            | Number                                                                                                                                                                                                                                                          |
|         | label           | 显示名称                                                                                                                                                                   | string                                                                                                                                                                                                                                                          |
|         | formItemType    | 配置显示的数据目前支持 input,inputNumber,select,datePicker,rangePicker,textArea,<br/>text,button,upload,dict,checkbox,user <br/>使用 user 类型 components 组件库里必须要有 | string                                                                                                                                                                                                                                                          |
|         | required        | 是否验证                                                                                                                                                                   | Boolean                                                                                                                                                                                                                                                         |
|         | placeholder     | 默认显示值                                                                                                                                                                 | string                                                                                                                                                                                                                                                          |
|         | value           | 设置值                                                                                                                                                                     | string                                                                                                                                                                                                                                                          |
|         | callbak         | 回调对象                                                                                                                                                                   | Object                                                                                                                                                                                                                                                          |
|         | key             | 对应后台字段                                                                                                                                                               | string                                                                                                                                                                                                                                                          |
|         | disabled        | 禁用属性                                                                                                                                                                   | Boolean                                                                                                                                                                                                                                                         |
|         | data            | formItemType == select 传入下拉数据                                                                                                                                        | Array[{name:'',value}]                                                                                                                                                                                                                                          |
|         | disabledDate    | ormItemType == datePicker 禁用选择指定日期                                                                                                                                 | Object:{type:0 丨,1 丨,2, startDisabledDate:moment, endDisabledDate:moment} <br/> 0 小于某个时间段 只需要传 endDisabledDate <br/> 1 大于于某个时间段 只需要传 startDisabledDate <br/> 2 大于某时间段并且小于某时间段 startDisabledDate & endDisabledDate 都需传 |
|         | url             | formItemType == upload                                                                                                                                                     | 上传后台地址                                                                                                                                                                                                                                                    |
|         | accept          | formItemType == upload 配置指定上传文件类型                                                                                                                                | stirng '.doc,.docx,.xls,.xlsx,.pdf,.rtf,.png,.jpg'                                                                                                                                                                                                              |
|         | listType        | formItemType == upload 配置显示方法 同 antd 官网 上传组件                                                                                                                  | 址                                                                                                                                                                                                                                                              |
|         | maxFileList     | formItemType == upload 配置最大上传数量                                                                                                                                    | Number 址                                                                                                                                                                                                                                                       |
|         | defaultFileList | formItemType == upload 配置默认回显                                                                                                                                        | 址                                                                                                                                                                                                                                                              |
