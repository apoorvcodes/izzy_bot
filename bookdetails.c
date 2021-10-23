#include<stdio.h>

#include<string.h>

struct bookdetails{
		char name[20];
		char author[20];
		int pages;
		float price;
	};
struct bookdetails b[20];
	
int output(struct bookdetails v[],int n);
	
int main(){
	
	int num,i;
	printf("enter the number of books to be entered : ");
	scanf("%d",&num);
	for(i=0;i<num;i++){
		printf("\n book %d details",i+1);
		
		printf("\nenter the book name : ");
		scanf("%s",b[i].name);
		printf("\nenter the author name : ");
		scanf("%s",b[i].author);
		printf("\nenter the number of pages : ");
		scanf("%d",&b[i].pages);
		printf("\nenter the book price : ");
		scanf("%f",&b[i].price);
	}
	output(b,num);
	return 0;
}

int output(struct bookdetails v[],int n){

	int i,t=1;
	for(i=0;i<n;i++,t++){
		printf("\n");
		printf("book number %d\n",t);
		printf("\tbook %d name is=%s \n",t,v[i].name);
		printf("\tbook %d author is=%s \n",t,v[i].author);
		printf("\tbook %d pages is=%d \n",t,v[i].pages);
		printf("\tbook %d name is=%f \n",t,v[i].price);
		printf("\n");
	}

}
