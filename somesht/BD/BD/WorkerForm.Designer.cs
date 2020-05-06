namespace BD
{
    partial class WorkerForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle2 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle3 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle4 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle5 = new System.Windows.Forms.DataGridViewCellStyle();
            this.gridOutput = new System.Windows.Forms.DataGridView();
            this.SortGroupBox = new System.Windows.Forms.GroupBox();
            this.SortButt = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.SortTypeSelector = new System.Windows.Forms.ComboBox();
            this.label1 = new System.Windows.Forms.Label();
            this.SortFieldSelect = new System.Windows.Forms.ComboBox();
            this.SearchGroup = new System.Windows.Forms.GroupBox();
            this.searchInput = new System.Windows.Forms.TextBox();
            this.searchCheckedList = new System.Windows.Forms.CheckedListBox();
            this.AddButton = new System.Windows.Forms.Button();
            this.EditButton = new System.Windows.Forms.Button();
            this.DeleteButton = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.gridOutput)).BeginInit();
            this.SortGroupBox.SuspendLayout();
            this.SearchGroup.SuspendLayout();
            this.SuspendLayout();
            // 
            // gridOutput
            // 
            this.gridOutput.AllowUserToAddRows = false;
            this.gridOutput.AllowUserToDeleteRows = false;
            this.gridOutput.AllowUserToResizeColumns = false;
            this.gridOutput.AllowUserToResizeRows = false;
            dataGridViewCellStyle1.BackColor = System.Drawing.Color.SlateBlue;
            dataGridViewCellStyle1.SelectionBackColor = System.Drawing.Color.DarkSlateBlue;
            this.gridOutput.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle1;
            this.gridOutput.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.ColumnHeader;
            this.gridOutput.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(255)))));
            this.gridOutput.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.gridOutput.CellBorderStyle = System.Windows.Forms.DataGridViewCellBorderStyle.SingleVertical;
            this.gridOutput.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.None;
            dataGridViewCellStyle2.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle2.BackColor = System.Drawing.Color.DarkSlateBlue;
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle2.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle2.SelectionBackColor = System.Drawing.Color.SlateBlue;
            dataGridViewCellStyle2.SelectionForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle2.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.gridOutput.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle2;
            this.gridOutput.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridViewCellStyle3.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle3.BackColor = System.Drawing.Color.BlueViolet;
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle3.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle3.SelectionBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(255)))));
            dataGridViewCellStyle3.SelectionForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle3.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.gridOutput.DefaultCellStyle = dataGridViewCellStyle3;
            this.gridOutput.EnableHeadersVisualStyles = false;
            this.gridOutput.GridColor = System.Drawing.Color.SlateBlue;
            this.gridOutput.Location = new System.Drawing.Point(16, 46);
            this.gridOutput.Margin = new System.Windows.Forms.Padding(4);
            this.gridOutput.MultiSelect = false;
            this.gridOutput.Name = "gridOutput";
            this.gridOutput.ReadOnly = true;
            this.gridOutput.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.None;
            dataGridViewCellStyle4.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle4.BackColor = System.Drawing.Color.SlateBlue;
            dataGridViewCellStyle4.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(204)));
            dataGridViewCellStyle4.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle4.SelectionBackColor = System.Drawing.Color.DarkSlateBlue;
            dataGridViewCellStyle4.SelectionForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle4.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.gridOutput.RowHeadersDefaultCellStyle = dataGridViewCellStyle4;
            this.gridOutput.RowHeadersWidthSizeMode = System.Windows.Forms.DataGridViewRowHeadersWidthSizeMode.AutoSizeToDisplayedHeaders;
            dataGridViewCellStyle5.BackColor = System.Drawing.Color.SlateBlue;
            dataGridViewCellStyle5.SelectionBackColor = System.Drawing.Color.DarkSlateBlue;
            this.gridOutput.RowsDefaultCellStyle = dataGridViewCellStyle5;
            this.gridOutput.RowTemplate.DefaultCellStyle.BackColor = System.Drawing.Color.Plum;
            this.gridOutput.RowTemplate.DefaultCellStyle.SelectionBackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(255)))));
            this.gridOutput.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect;
            this.gridOutput.ShowEditingIcon = false;
            this.gridOutput.Size = new System.Drawing.Size(689, 322);
            this.gridOutput.TabIndex = 0;
            this.gridOutput.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.gridOutput_CellContentClick);
            // 
            // SortGroupBox
            // 
            this.SortGroupBox.Controls.Add(this.SortButt);
            this.SortGroupBox.Controls.Add(this.label2);
            this.SortGroupBox.Controls.Add(this.SortTypeSelector);
            this.SortGroupBox.Controls.Add(this.label1);
            this.SortGroupBox.Controls.Add(this.SortFieldSelect);
            this.SortGroupBox.ForeColor = System.Drawing.Color.White;
            this.SortGroupBox.Location = new System.Drawing.Point(729, 238);
            this.SortGroupBox.Margin = new System.Windows.Forms.Padding(4);
            this.SortGroupBox.Name = "SortGroupBox";
            this.SortGroupBox.Padding = new System.Windows.Forms.Padding(4);
            this.SortGroupBox.Size = new System.Drawing.Size(316, 95);
            this.SortGroupBox.TabIndex = 1;
            this.SortGroupBox.TabStop = false;
            this.SortGroupBox.Text = "Сортировка";
            // 
            // SortButt
            // 
            this.SortButt.BackColor = System.Drawing.Color.Plum;
            this.SortButt.FlatAppearance.BorderSize = 0;
            this.SortButt.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.SortButt.ForeColor = System.Drawing.Color.White;
            this.SortButt.Location = new System.Drawing.Point(265, 58);
            this.SortButt.Margin = new System.Windows.Forms.Padding(4);
            this.SortButt.Name = "SortButt";
            this.SortButt.Size = new System.Drawing.Size(43, 26);
            this.SortButt.TabIndex = 2;
            this.SortButt.Text = "OK";
            this.SortButt.UseVisualStyleBackColor = false;
            this.SortButt.Click += new System.EventHandler(this.SortButt_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(8, 62);
            this.label2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(33, 17);
            this.label2.TabIndex = 3;
            this.label2.Text = "Тип";
            // 
            // SortTypeSelector
            // 
            this.SortTypeSelector.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(255)))));
            this.SortTypeSelector.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.SortTypeSelector.ForeColor = System.Drawing.Color.Black;
            this.SortTypeSelector.FormattingEnabled = true;
            this.SortTypeSelector.Items.AddRange(new object[] {
            "по возрастанию",
            "по убыванию"});
            this.SortTypeSelector.Location = new System.Drawing.Point(75, 58);
            this.SortTypeSelector.Margin = new System.Windows.Forms.Padding(4);
            this.SortTypeSelector.Name = "SortTypeSelector";
            this.SortTypeSelector.Size = new System.Drawing.Size(181, 24);
            this.SortTypeSelector.TabIndex = 2;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(8, 27);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(64, 17);
            this.label1.TabIndex = 1;
            this.label1.Text = "Столбец";
            // 
            // SortFieldSelect
            // 
            this.SortFieldSelect.AutoCompleteMode = System.Windows.Forms.AutoCompleteMode.Append;
            this.SortFieldSelect.AutoCompleteSource = System.Windows.Forms.AutoCompleteSource.ListItems;
            this.SortFieldSelect.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(255)))));
            this.SortFieldSelect.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.SortFieldSelect.ForeColor = System.Drawing.Color.Black;
            this.SortFieldSelect.FormattingEnabled = true;
            this.SortFieldSelect.Location = new System.Drawing.Point(75, 23);
            this.SortFieldSelect.Margin = new System.Windows.Forms.Padding(4);
            this.SortFieldSelect.Name = "SortFieldSelect";
            this.SortFieldSelect.Size = new System.Drawing.Size(232, 24);
            this.SortFieldSelect.TabIndex = 0;
            // 
            // SearchGroup
            // 
            this.SearchGroup.Controls.Add(this.searchInput);
            this.SearchGroup.Controls.Add(this.searchCheckedList);
            this.SearchGroup.ForeColor = System.Drawing.Color.White;
            this.SearchGroup.Location = new System.Drawing.Point(729, 46);
            this.SearchGroup.Margin = new System.Windows.Forms.Padding(4);
            this.SearchGroup.Name = "SearchGroup";
            this.SearchGroup.Padding = new System.Windows.Forms.Padding(4);
            this.SearchGroup.Size = new System.Drawing.Size(316, 185);
            this.SearchGroup.TabIndex = 2;
            this.SearchGroup.TabStop = false;
            this.SearchGroup.Text = "Поиск/Фильтр";
            // 
            // searchInput
            // 
            this.searchInput.AutoCompleteSource = System.Windows.Forms.AutoCompleteSource.HistoryList;
            this.searchInput.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(255)))));
            this.searchInput.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.searchInput.ForeColor = System.Drawing.Color.White;
            this.searchInput.Location = new System.Drawing.Point(8, 30);
            this.searchInput.Margin = new System.Windows.Forms.Padding(4);
            this.searchInput.Name = "searchInput";
            this.searchInput.Size = new System.Drawing.Size(299, 22);
            this.searchInput.TabIndex = 1;
            this.searchInput.TextChanged += new System.EventHandler(this.searchInput_TextChanged);
            // 
            // searchCheckedList
            // 
            this.searchCheckedList.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(255)))));
            this.searchCheckedList.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.searchCheckedList.ForeColor = System.Drawing.Color.Black;
            this.searchCheckedList.FormattingEnabled = true;
            this.searchCheckedList.Location = new System.Drawing.Point(8, 62);
            this.searchCheckedList.Margin = new System.Windows.Forms.Padding(4);
            this.searchCheckedList.Name = "searchCheckedList";
            this.searchCheckedList.Size = new System.Drawing.Size(299, 104);
            this.searchCheckedList.TabIndex = 0;
            // 
            // AddButton
            // 
            this.AddButton.BackColor = System.Drawing.Color.Plum;
            this.AddButton.FlatAppearance.BorderSize = 0;
            this.AddButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.AddButton.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))));
            this.AddButton.Location = new System.Drawing.Point(729, 340);
            this.AddButton.Margin = new System.Windows.Forms.Padding(4);
            this.AddButton.Name = "AddButton";
            this.AddButton.Size = new System.Drawing.Size(100, 28);
            this.AddButton.TabIndex = 3;
            this.AddButton.Text = "Добавить";
            this.AddButton.UseVisualStyleBackColor = false;
            this.AddButton.Click += new System.EventHandler(this.AddButton_Click);
            // 
            // EditButton
            // 
            this.EditButton.BackColor = System.Drawing.Color.Plum;
            this.EditButton.FlatAppearance.BorderSize = 0;
            this.EditButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.EditButton.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))));
            this.EditButton.Location = new System.Drawing.Point(837, 340);
            this.EditButton.Margin = new System.Windows.Forms.Padding(4);
            this.EditButton.Name = "EditButton";
            this.EditButton.Size = new System.Drawing.Size(100, 28);
            this.EditButton.TabIndex = 4;
            this.EditButton.Text = "Изменить";
            this.EditButton.UseVisualStyleBackColor = false;
            this.EditButton.Click += new System.EventHandler(this.EditButton_Click);
            // 
            // DeleteButton
            // 
            this.DeleteButton.BackColor = System.Drawing.Color.Plum;
            this.DeleteButton.FlatAppearance.BorderSize = 0;
            this.DeleteButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.DeleteButton.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(255)))));
            this.DeleteButton.Location = new System.Drawing.Point(944, 340);
            this.DeleteButton.Margin = new System.Windows.Forms.Padding(4);
            this.DeleteButton.Name = "DeleteButton";
            this.DeleteButton.Size = new System.Drawing.Size(100, 28);
            this.DeleteButton.TabIndex = 5;
            this.DeleteButton.Text = "Удалить";
            this.DeleteButton.UseVisualStyleBackColor = false;
            this.DeleteButton.Click += new System.EventHandler(this.DeleteButton_Click);
            // 
            // WorkerForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.MediumPurple;
            this.ClientSize = new System.Drawing.Size(1059, 389);
            this.Controls.Add(this.DeleteButton);
            this.Controls.Add(this.EditButton);
            this.Controls.Add(this.AddButton);
            this.Controls.Add(this.SearchGroup);
            this.Controls.Add(this.SortGroupBox);
            this.Controls.Add(this.gridOutput);
            this.ForeColor = System.Drawing.Color.White;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Margin = new System.Windows.Forms.Padding(4);
            this.MaximizeBox = false;
            this.Name = "WorkerForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.WorkerForm_FormClosed);
            this.Load += new System.EventHandler(this.WorkerForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.gridOutput)).EndInit();
            this.SortGroupBox.ResumeLayout(false);
            this.SortGroupBox.PerformLayout();
            this.SearchGroup.ResumeLayout(false);
            this.SearchGroup.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView gridOutput;
        private System.Windows.Forms.GroupBox SortGroupBox;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ComboBox SortFieldSelect;
        private System.Windows.Forms.Button SortButt;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.ComboBox SortTypeSelector;
        private System.Windows.Forms.GroupBox SearchGroup;
        private System.Windows.Forms.TextBox searchInput;
        private System.Windows.Forms.CheckedListBox searchCheckedList;
        private System.Windows.Forms.Button AddButton;
        private System.Windows.Forms.Button EditButton;
        private System.Windows.Forms.Button DeleteButton;
    }
}