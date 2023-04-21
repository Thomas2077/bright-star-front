

import React, { useRef, useState } from 'react';
import { ProForm, ProFormInstance } from "@ant-design/pro-form";
import { ActionType, EditableFormInstance, EditableProTable, ProColumns } from "@ant-design/pro-table";


type DataSourceType = {
  idx: React.Key;
  associate?: string;
  questionsNum?: number;
  type?: string;
  fraction?: number;
  scoringMethod?: string;
};

const defaultData: DataSourceType[] = [
  {
    idx: 624748504,
    associate: '题库名称一',
    questionsNum: 10,
    type: 'multiple',
    scoringMethod: 'continuous',
    fraction: 20,
  }
];

const TABLE = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const formRef = useRef<ProFormInstance<any>>();
  const actionRef = useRef<ActionType>();
  const editableFormRef = useRef<EditableFormInstance>();
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '关联题库',
      dataIndex: 'associate',
      valueType: 'text',
      ellipsis: true,
    },
    {
      title: '题型',
      key: 'type',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        multiple: { text: '多选题', status: 'Default' },
        radio: { text: '单选题', status: 'Warning' },
        vacant: {
          text: '填空题',
          status: 'Error',
        },
        judge: {
          text: '判断题',
          status: 'Success',
        },
      },
    },
    {
      title: '题数',
      dataIndex: 'questionsNum',
      valueType: 'digit',
    },
    {
      title: '计分方式',
      dataIndex: 'scoringMethod',
      valueType: 'select',
      request: async () => [
        {
          value: 'discrete',
          label: '离散型',
        },
        {
          value: 'continuous',
          label: '连续型',
        },
      ],

    },
    {
      title: '分值',
      width: 150,
      dataIndex: 'fraction',

      fieldProps: {
        mode: 'multiple',
      },
      request: async () =>
        ['A', 'B', 'D', 'E', 'F'].map((item, index) => ({
          label: item,
          value: index,
        })),
    },
    {
      title: '操作',
      valueType: 'option',

    },
  ];

  return (

        // <ProForm<{
        //   table: DataSourceType[];
        // }>
        //   formRef={formRef}
        //   initialValues={{
        //     table: defaultData,
        //   }}
        // >
          <EditableProTable<DataSourceType>
            rowKey="id"
            scroll={{
              x: true,
            }}
            editableFormRef={editableFormRef}
            controlled
            actionRef={actionRef}
            formItemProps={{
              label: '题库编辑',
              rules: [
                {
                  validator: async (_, value) => {
                    if (value.length < 1) {
                      throw new Error('请至少添加一个题库');
                    }

                    if (value.length > 5) {
                      throw new Error('最多可以设置五个题库');
                    }
                  },
                },
              ],
            }}
            maxLength={10}
            name="table"
            columns={columns}
            recordCreatorProps={{
              record: (index) => {
                return { idx: index + 1 };
              },
            }}
            editable={{
              type: 'multiple',
              editableKeys,
              onChange: setEditableRowKeys,
            }}
          />
        // </ProForm>

  );
};
export default TABLE