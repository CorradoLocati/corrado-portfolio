## LSE Data Analytics Online Career Accelerator 
# DA301:  Advanced Analytics for Organisational Impact

###############################################################################

# Assignment 5 scenario
## Turtle Games’s sales department has historically preferred to use R when performing 
## sales analyses due to existing workflow systems. As you’re able to perform data analysis 
## in R, you will perform exploratory data analysis and present your findings by utilising 
## basic statistics and plots. You'll explore and prepare the data set to analyse sales per 
## product. The sales department is hoping to use the findings of this exploratory analysis 
## to inform changes and improvements in the team. (Note that you will use basic summary 
## statistics in Module 5 and will continue to go into more detail with descriptive 
## statistics in Module 6.)

################################################################################

## Assignment 5 objective
## Load and wrangle the data. Use summary statistics and groupings if required to sense-check
## and gain insights into the data. Make sure to use different visualisations such as scatterplots, 
## histograms, and boxplots to learn more about the data set. Explore the data and comment on the 
## insights gained from your exploratory data analysis. For example, outliers, missing values, 
## and distribution of data. Also make sure to comment on initial patterns and distributions or 
## behaviour that may be of interest to the business.

################################################################################

# Module 5 assignment: Load, clean and wrangle data using R

## It is strongly advised that you use the cleaned version of the data set that you created and 
##  saved in the Python section of the course. Should you choose to redo the data cleaning in R, 
##  make sure to apply the same transformations as you will have to potentially compare the results.
##  (Note: Manual steps included dropping and renaming the columns as per the instructions in module 1.
##  Drop ‘language’ and ‘platform’ and rename ‘remuneration’ and ‘spending_score’) 

## 1. Open your RStudio and start setting up your R environment. 
## 2. Open a new R script and import the turtle_review.csv data file, which you can download from 
##      Assignment: Predicting future outcomes. (Note: You can use the clean version of the data 
##      you saved as csv in module 1, or, can manually drop and rename the columns as per the instructions 
##      in module 1. Drop ‘language’ and ‘platform’ and rename ‘remuneration’ and ‘spending_score’) 
## 3. Import all the required libraries for the analysis and view the data. 
## 4. Load and explore the data.
##    - View the head the data.
##    - Create a summary of the new data frame.
## 5. Perform exploratory data analysis by creating tables and visualisations to better understand 
##      groupings and different perspectives into customer behaviour and specifically how loyalty 
##      points are accumulated. Example questions could include:
##    - Can you comment on distributions, patterns or outliers based on the visual exploration of the data?
##    - Are there any insights based on the basic observations that may require further investigation?
##    - Are there any groupings that may be useful in gaining deeper insights into customer behaviour?
##    - Are there any specific patterns that you want to investigate
## 6. Create
##    - Create scatterplots, histograms, and boxplots to visually explore the loyalty_points data.
##    - Select appropriate visualisations to communicate relevant findings and insights to the business.
## 7. Note your observations and recommendations to the technical and business users.

###############################################################################

# Your code here.

library(tidyverse)
# import the turtle_review.csv
turtle_reviews <- read.csv('C:/Users/bocco/OneDrive/Documents/Education/20240708-20250208 - LSE - Data Analytics Career Accelerator/Course 3/Assigment/LSE_DA301_assignment_files_new/turtle_reviews.csv', header=T)
# turtle_reviews <- read.csv(file.choose(), header=T)

################################################################################

# Manipulate the data frame

################################################################################

# View the data frame.
as_tibble(turtle_reviews)
dim(turtle_reviews)
# View(turtle_reviews)

# Drop unnecessary columns. 
#For this study, not only ‘language’ and ‘platform’, but also 'review' and 'summary'
turtle_reviews_df <- select(turtle_reviews, -c('language', 'platform', 'review', 'summary'))

# View the new data frame.           
colnames(turtle_reviews_df)
# View(turtle_reviews_df)

# Rename  ‘remuneration’ and ‘spending_score’ using dplyr
turtle_reviews_2_df <- rename(turtle_reviews_df, 
                              remuneration = `remuneration..k..`,
                              spending_score = `spending_score..1.100.`)

# Check if there are missing values 
colSums(is.na(turtle_reviews_2_df))

# View the new data frame.  
colnames(turtle_reviews_2_df)
# View(turtle_reviews_2_df)


################################################################################

# Data analysis and visualization

################################################################################

# Load the necessary libraries.
library(dplyr)
library(skimr) # Create insightful summaries of data set.
library(DataExplorer) # Create insightful reports of data set.
library(ggplot2) 


### Load and explore the data:

# 1. view the head of the data.
head(turtle_reviews_2_df)

# 2. Create a summary of the new data frame.
summary(turtle_reviews_2_df)

# From the summary, we can see that the 50% of customers are between 29 and 40 years old, 
# with a remuneration between 30k £ and 64k £. Their spending score is between 32 and 73, 
# wile their loyalty points lay between 772 to 1751. 
# More insights are needed, with the help of plots. 


#########################################################

# Histograms

#########################################################

# Histogram of age by gender
ggplot(turtle_reviews_2_df, aes(x = age, fill = gender)) +
  geom_histogram(binwidth = 5, color = "black", alpha = 0.7, position = "dodge") +
  labs(
    title = "Distribution of Age by Gender",
    x = "Age",
    y = "Count"
  ) +
  theme_minimal()

# Customers are between 19 and 62 years old, with the majority between 30 and 60 years old. 
# Within such cohort, the female customers are more than the male customers.

# Histogram of remuneration by gender
ggplot(turtle_reviews_2_df, aes(x = remuneration, fill = gender)) +
  geom_histogram(binwidth = 10, color = "black", alpha = 0.7, position = "dodge") +
  labs(
    title = "Distribution of remuneration by gender",
    x = "Remuneration (k£)",
    y = "Count"
  ) +
  theme_minimal()

# The highest remuneration are between 20K £ and 80K £.  

# Histogram of loyalty points by gender
ggplot(turtle_reviews_2_df, aes(x = loyalty_points, fill = gender)) +
  geom_histogram(binwidth = 200, color = "black", alpha = 0.7, position = "dodge") +
  labs(
    title = "Distribution of loyatly point by Gender",
    x = "Loyalty points",
    y = "Count"
  ) +
  theme_minimal()

# The most frequent amounts of loyalty points lay between 0 and 2000  

# Histogram of spending score by gender
ggplot(turtle_reviews_2_df, aes(x = spending_score, fill = gender)) +
  geom_histogram(binwidth = 10, color = "black", alpha = 0.7, position = "dodge") +
  labs(
    title = "Distribution of spending score by gender",
    x = "Spending score (0 - 100)",
    y = "Count"
  ) +
  theme_minimal()

# People with a spending score of 50 are higher in number than the others. 

#########################################################

# Scatter plots

#########################################################

# Scatterplot spending score vs. loyalty points
ggplot(turtle_reviews_2_df, aes(x = spending_score, y = loyalty_points)) +
  geom_point(size = 3, alpha = 1, color = "blue")  + 
  geom_smooth(method = "lm", color = "black", se = FALSE) +
  labs(title = "Spending Score vs. Loyalty Points", x = "Spending Score", y = "Loyalty Points") + 
  theme_minimal()

# Scatterplot remuneration vs. loyalty points 
ggplot(turtle_reviews_2_df, aes(x = remuneration, y = loyalty_points)) +
  geom_point(size = 3, alpha = 1, color = "green")  + 
  geom_smooth(method = "lm", color = "black", se = FALSE) +
  labs(title = "Remuneration vs. Loyalty Points", x = "Remuneration (k£)", y = "Loyalty Points") + 
  theme_minimal()

# Scatterplot age vs. loyalty points 
ggplot(turtle_reviews_2_df, aes(x = age, y = loyalty_points)) +
  geom_point(size = 3, alpha = 1, color = "red")  + 
  geom_smooth(method = "lm", color = "black", se = FALSE) +
  labs(title = "Age vs. Loyalty Points", x = "Age", y = "Loyalty Points") + 
  theme_minimal()

# Like in the previous chapter, there is a positive trend line of spending score vs. loyalty points, 
# so the higher the spending score, the higher is the trend line. 
# Similarly, a positive trend line can be drawn also plotting remuneration vs. loyalty points, 
# so, the higher the income, the higher the loyalty points. 
# However, no useful trend line can be drawn when plotting the age vs. loyalty points, 
# since the age looks not being correlate with the loyalty points. 


#########################################################

# Box and Whisker plots

#########################################################

# Boxplot remuneration vs. education, divided by gender
ggplot(turtle_reviews_2_df, aes(x = education, y = remuneration, fill = gender)) +
  geom_boxplot() +
  labs(title = "Remuneration by Education Level", x = "", y = "Remuneration (k£)") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# As a starting point a description of remuneration vs. education level od customer is presented. 
# The 50% of customers in education level from diploma to post graduated have an income up to approx. 60k £,
# with a median around 40k £ and 48k £, and with a positive skewness of data.
# Besides that, there is little to none differences between male and female customers.
# 50% of female customers with basic education reach a higher income, up to approx 75k £, with 40k £ median,
# while 50% of male customers with basic income have a remuneration only between 62k £ and 65k £. 

# Boxplot spending score vs. education, divided by gender
ggplot(turtle_reviews_2_df, aes(x = education, y = spending_score, fill = gender)) +
  geom_boxplot() +
  labs(title = "Spending Score by Education Level", x = "Education", y = "Spending Score (0 - 100)") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# The spending score between genders looks not driven or affected by the education level.
# The only valuable difference is that male customers with a basic education and 
# with a post graduate diploma spend more than female customers with the same education.

# Boxplot education vs. loyalty points, divided by gender
ggplot(turtle_reviews_2_df, aes(x = education, y = loyalty_points, fill = gender)) +
  geom_boxplot() +
  labs(title = "Loyalty Points by Education Level", x = "Education", y = "Loyalty Points") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# The loyalty points are collected per education level. It is clear how 50% of the customers with
# basic education collect way more loyalty points than the other groups. 
# However, it must be pointed put that the other groups have outliers higher than 
# the basic education groups.  


#########################################################

# Conclusions

#########################################################

# Customers with basic education have high spending score and high loyalty points, so 
# Turtle Games should point its marketing efforts towards such groups, regardless of their gender. 
# However, the other education groups should be of interest as well, due to the presence of small amounts 
# of customers spending and having a number of loyalty points way higher that the 50% of such groups. 

















###############################################################################
###############################################################################

# Assignment 6 scenario

## In Module 5, you were requested to redo components of the analysis using Turtle Games’s preferred 
## language, R, in order to make it easier for them to implement your analysis internally. As a final 
## task the team asked you to perform a statistical analysis and create a multiple linear regression 
## model using R to predict loyalty points using the available features in a multiple linear model. 
## They did not prescribe which features to use and you can therefore use insights from previous modules 
## as well as your statistical analysis to make recommendations regarding suitability of this model type,
## the specifics of the model you created and alternative solutions. As a final task they also requested 
## your observations and recommendations regarding the current loyalty programme and how this could be 
## improved. 

################################################################################

## Assignment 6 objective
## You need to investigate customer behaviour and the effectiveness of the current loyalty program based 
## on the work completed in modules 1-5 as well as the statistical analysis and modelling efforts of module 6.
##  - Can we predict loyalty points given the existing features using a relatively simple MLR model?
##  - Do you have confidence in the model results (Goodness of fit evaluation)
##  - Where should the business focus their marketing efforts?
##  - How could the loyalty program be improved?
##  - How could the analysis be improved?

################################################################################

## Assignment 6 assignment: Making recommendations to the business.

## 1. Continue with your R script in RStudio from Assignment Activity 5: Cleaning, manipulating, and 
##     visualising the data.
## 2. Load and explore the data, and continue to use the data frame you prepared in Module 5.
## 3. Perform a statistical analysis and comment on the descriptive statistics in the context of the 
##     review of how customers accumulate loyalty points.
##  - Comment on distributions and patterns observed in the data.
##  - Determine and justify the features to be used in a multiple linear regression model and potential
##.    concerns and corrective actions.
## 4. Create a Multiple linear regression model using your selected (numeric) features.
##  - Evaluate the goodness of fit and interpret the model summary statistics.
##  - Create a visual demonstration of the model
##  - Comment on the usefulness of the model, potential improvements and alternate suggestions that could 
##     be considered.
##  - Demonstrate how the model could be used to predict given specific scenarios. (You can create your own 
##     scenarios).
## 5. Perform exploratory data analysis by using statistical analysis methods and comment on the descriptive 
##     statistics in the context of the review of how customers accumulate loyalty points.
## 6. Document your observations, interpretations, and suggestions based on each of the models created in 
##     your notebook. (This will serve as input to your summary and final submission at the end of the course.)

################################################################################

# Your code here.

# View the new data frame.  
colnames(turtle_reviews_2_df)

# Descriptive statistics of the data frame
summary(turtle_reviews_2_df)

################################################################################

# Correlation matrix for numerical columns

################################################################################

numeric_cols <- sapply(turtle_reviews_2_df, is.numeric)
cor_matrix <- cor(turtle_reviews_2_df[, numeric_cols], use = "complete.obs")

# Print correlation matrix
print(cor_matrix)

# Import the psych package.
library(psych)

# Use the corPlot() function.
# Specify the data frame (wine) and set 
# character size (cex=2).
corPlot(cor_matrix, cex=0.8)

# The remuneration and spending score have a quite strong positive correlation 
# with the loyalty points (e.g., the higher the remuneration, the higher the 
# amount of loyalty points collected), and a weak negative correlation with the 
# age. Here, it looks that the age is not an important factor, like deducted from the decision tree. 

################################################################################

# Multiple Linear Regression (MLR) Model

################################################################################

# MLR with all the variables 
model_ALL <- lm(loyalty_points ~ age + remuneration + spending_score, 
              data = turtle_reviews_2_df)

# Summary of the model
summary(model_ALL)
# Adjusted R-squared:  0.8397 

# Age looks to be an important variable. WE saw in the decision tree that was
# unimportant. 

# Let's try a MLR without the age variable

# MLR without age variable
model_NO_AGE <-lm(loyalty_points ~ remuneration + spending_score, 
                     data = turtle_reviews_2_df)

# Summary of the model
summary(model_NO_AGE)
#Adjusted R-squared:  0.8267

# Adjusted R^2 dropped to 0.8262, compared to the model with all the variables (0.8397), 
# The modela with all the variables will be used.

# Add predictions to the data frame
turtle_reviews_2_df$predicted <- predict(model_ALL)

# Scatterplot of actual vs predicted
library(ggplot2)
ggplot(turtle_reviews_2_df, aes(x = predicted, y = loyalty_points)) +
  geom_point(color = "blue") +
  geom_smooth(method = "lm", se = FALSE, color = "black") +
  labs(title = "Actual vs Predicted Loyalty Points", x = "Predicted Values", y = "Actual Loyalty Points") +
  theme_minimal()


# Residual plot
ggplot(turtle_reviews_2_df, aes(x = predicted, y = residuals(model_ALL))) +
  geom_point(color = "red") +
  geom_hline(yintercept = 0, linetype = "dashed") +
  labs(title = "Residual Plot", x = "Predicted Values", y = "Residuals") +
  theme_minimal()


# Here, it is possible to see that the linear regression does not work.
# We can try to perform a square root of the loyalty points

###############################################################################
###############################################################################

# Transform loyalty_points using square root
turtle_reviews_2_df$sqrt_loyalty_points <- sqrt(turtle_reviews_2_df$loyalty_points)


# Build the model using square roots
model_ALL_SQRT_LOYALTY_POINTS <- lm(sqrt_loyalty_points ~ age + remuneration + spending_score, 
                                         data = turtle_reviews_2_df)

# View the model summary
summary(model_ALL_SQRT_LOYALTY_POINTS)
# Adjusted R-squared:  0.9068 


# Remove age
model_NO_AGE_SQRT_LOYALTY_POINTS <- lm(sqrt_loyalty_points ~ remuneration + spending_score, 
                                         data = turtle_reviews_2_df)

# View the model summary
summary(model_NO_AGE_SQRT_LOYALTY_POINTS)
# Adjusted R-squared:  0.8886 

# Removing the age let the R^2 drop to 0.8886. 
# Again, the model with all the variables will be used


# Add predictions to the data frame
turtle_reviews_2_df$sqrt_predicted <- predict(model_ALL_SQRT_LOYALTY_POINTS)

# Scatterplot of actual vs predicted (transformed values)
library(ggplot2)
ggplot(turtle_reviews_2_df, aes(x = sqrt_predicted, y = sqrt_loyalty_points)) +
  geom_point(color = "blue") +
  geom_smooth(method = "lm", 
              se = FALSE, 
              color = "black",
              linewidth = 1
              ) +
  labs(
    title = "Actual vs Predicted (Square Root of Loyalty Points)",
    x = "Predicted Values (Square Root)",
    y = "Actual Values (Square Root)"
  ) +
  theme_minimal()

# Residual plot
ggplot(turtle_reviews_2_df, aes(x = sqrt_predicted, y = residuals(model_ALL_SQRT_LOYALTY_POINTS))) +
  geom_point(color = "red") +
  geom_hline(yintercept = 0, linetype = "dashed") +
  labs(
    title = "Residual Plot (Square Root Transformed)",
    x = "Predicted Values (Square Root)",
    y = "Residuals"
  ) +
  theme_minimal()

# The scatter plot show a good fit. Therefore, the model has a good linear
# relationship with the square root of loyalty points. 
# The residual plot also prove the goodness of the fit, since the residuals are randomly scattered around the zero.

# To improve he model, the categorical variables could be included.
# Other transformations could be checked (log, square, and others)

# We can check the model by predicting the loyalty point by giving variables
# hypothetical values

############################################################################################

# Define new scenarios
new_scenarios <- data.frame(
  age = c(25, 40, 60),                  # Hypothetical ages
  remuneration = c(15.5, 40.0, 80),   # Hypothetical remuneration values
  spending_score = c(10, 50, 85)        # Hypothetical spending scores
)

# Predict the square root of loyalty points for new scenarios
predicted_sqrt_values <- predict(model_ALL_SQRT_LOYALTY_POINTS, newdata = new_scenarios)

# Convert the predictions back to loyalty points by squaring them
predicted_loyalty_points <- predicted_sqrt_values^2

# Add predictions to the new_scenarios data frame
new_scenarios$sqrt_predicted <- predicted_sqrt_values
new_scenarios$predicted_loyalty_points <- predicted_loyalty_points

# Add a column for the square root of predicted loyalty points (for consistency)
new_scenarios$sqrt_loyalty_points <- sqrt(new_scenarios$predicted_loyalty_points)

# Add a column for square root of actual values in the original dataset
turtle_reviews_2_df$sqrt_loyalty_points <- sqrt(turtle_reviews_2_df$loyalty_points)

# Combine original data and new scenarios
combined_data <- rbind(
  data.frame(sqrt_predicted = turtle_reviews_2_df$sqrt_predicted, 
             sqrt_loyalty_points = turtle_reviews_2_df$sqrt_loyalty_points,
             type = "Actual Data"),
  data.frame(sqrt_predicted = new_scenarios$sqrt_predicted, 
             sqrt_loyalty_points = new_scenarios$sqrt_loyalty_points,
             type = "New Scenarios")
)

# Scatterplot with combined data, larger red dots, and transparency
ggplot(combined_data, aes(x = sqrt_predicted, y = sqrt_loyalty_points, color = type, size = type, alpha = type)) +
  geom_point() +
  geom_smooth(data = subset(combined_data, type == "Actual Data"),
              method = "lm", 
              se = FALSE, 
              color = "black", linewidth = 1
              ) +
  scale_color_manual(values = c("blue", "red")) +
  scale_size_manual(values = c(2, 5)) +  # Larger size for "New Scenarios" (red dots)
  scale_alpha_manual(values = c(0.7, 1)) +  # Slightly transparent for actual data, fully opaque for new scenarios
  labs(
    title = "Actual vs Predicted (Square Root of Loyalty Points)",
    x = "Predicted Values (Square Root)",
    y = "Actual Values (Square Root)"
  ) +
  theme_minimal()


################################################################################

# Conclusions

################################################################################
# A multiple linear regression model (MLR) is used to correlate the variables with the loyalty points.
# In order to see the necessary variables to put into the multiple linear regression model,
# a correlation plot is drawn. 
# Here, it is possible to see there is a quite strong positive correlation between spending 
# score and loyalty points, and remuneration and loyalty points, 
# while there is a weak negative correlation with the age and the weak positive correlation with the product.
# From the correlation plot and MLRs with different variables, a suitable model was chosen.
# At the beginning, uh the model was a feed with all the variables 
# With the decision tree in Python, it was shown that the age was not an important variable, 
# but with MLR it is shown that age is indeed important. 
# Other multiple linear regression models were tried without the gender, 
# Comparing the R-squared values, it was decided that the model to fit the data
# was the multiple linear regression model with all the variables.
# However, the model does not correlate well with the loyalty points.
# Therefore, a model to fit the square root of the loyalty points was successfully built.
# Overall, the R^2 of the MLRs fitting the square roots of the loyalty points are higher 
# than the respective models fitting the loyalty points. 
# The models was successfully tested with three scenarios.




                                                                                                                                                                             