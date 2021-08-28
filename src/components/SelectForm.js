import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectForm = ({
  classes,
  student,
  handlePdfChange
}) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">{`${student}'s`} Learning Corner</InputLabel>
      <Select
        onChange={handlePdfChange}
        native defaultValue="" id="grouped-native-select">
        <option aria-label="None" value="" />
        <optgroup label="Health">
          <option value="0">Bright Futures Activity Book</option>
          <option value="1">Color Me Drug Free Activity Book</option>
          <option value="2">Dyno The Dinosaur Just Say No Book</option>
          <option value="3">R.B.'s Activity Book 4</option>
          <option value="4">R.B.'s Activity Book 1</option>
          <option value="5">R.B.'s Activity Book 2</option>
          <option value="6">R.B.'s Activity Book 3</option>
        </optgroup>
        <optgroup label="Language">
          <option value="7">Alphabet Sounds Lotto</option>
          <option value="8">Fun with Grammar</option>
          <option value="9">Parent Assessment of Language</option>
          <option value="10">Wally Bear and Friends - ABC Book</option>
        </optgroup>
        <optgroup label="Math">
          <option value="11">Disney Learning Addition and Subtraction</option>
          <option value="12">Disney Learning Time and Money</option>
          <option value="13">Disney Princess Addition and Subtraction</option>
          <option value="14">FuntoLearn 123</option>
          <option value="15">Learning Pages - Calendars</option>
          <option value="16">Learning Pages - Money</option>
          <option value="17">Learning Pages - Numbers</option>
          <option value="18">Learning Pages - Time</option>
          <option value="19">Learning with Pooh Number and Counting</option>
          <option value="20">NCLB - Helping Your Child Learn Math</option>
          <option value="21">Skills Booster Fun with Math K</option>
          <option value="22">Skills Booster Fun with Math G1</option>
        </optgroup>
        <optgroup label="Miscellaneous">
          <option value="23">Amazing April</option>
          <option value="24">Awesome Autumn</option>
          <option value="25">Back To School 1</option>
          <option value="26">Back To School 2</option>
          <option value="27">Back To School 3</option>
          <option value="28">Celebrate Spring</option>
          <option value="29">Celebrate Winter</option>
          <option value="30">Fabulous February</option>
          <option value="31">Fantastic Fall</option>
          <option value="32">Fantastic February</option>
          <option value="33">Giving Thanks</option>
          <option value="34">Halloween</option>
          <option value="35">In My Garden</option>
          <option value="36">Jammin' July</option>
          <option value="37">Marvelous March</option>
          <option value="38">Marvelous May</option>
          <option value="39">Monster Madness</option>
          <option value="40">New Years</option>
          <option value="41">Summer Fun 1</option>
          <option value="42">Summer Fun 2</option>
          <option value="43">Summer Fun 3</option>
          <option value="44">Summer Storms</option>
          <option value="45">Summer Travel</option>
          <option value="46">Thankful Times</option>
          <option value="47">Thanksgiving</option>
          <option value="48">Tricks and Treats</option>
          <option value="49">Wonderful Winter</option>
          <option value="50">Wondrous Weather</option>
          <option value="51">Christmas Activity Pack</option>
          <option value="52">Christmas ActivityPack 2</option>
          <option value="53">FisherPrice LearningFun Kindergarten I</option>
          <option value="54">FisherPrice LearningFun Kindergarten II</option>
          <option value="55">FisherPrice Learning Fun Preschool 1</option>
          <option value="56">FisherPrice LearningFun Preschool 2</option>
          <option value="57">Garfield Funpad</option>
          <option value="58">My Grade Memory Book</option>
          <option value="59">My Kindergarten Portfolio</option>
          <option value="60">My Memory Book 2</option>
          <option value="61">Ready Set Learn-Family Activity Booklet</option>
          <option value="62">SchoolZone 1st Grade Scholar SuperDeluxe</option>
          <option value="63">Scooby Doo MadLibs</option>
          <option value="64">Spring Activity Pack</option>
          <option value="65">Summer Activity Pack</option>
          <option value="66">WackyMadLibsIII</option>
          <option value="67">Winter Weather Activity Pack</option>
        </optgroup>
        <optgroup label="Reading">
          <option value="69">Barbie Reading Enrichment</option>
          <option value="70">Helping Your Child Become a Reader</option>
          <option value="71">Skills Booster Fun with Reading G1</option>
          <option value="72">Skills Booster Fun with Reading K</option>
        </optgroup>
        <optgroup label="Science">
          <option value="73">Conservation Dalmation Lower Elementary Activity Book</option>
          <option value="74">Conservation Dalmation Upper Elementary Activity Book</option>
          <option value="75">Endangered Species Coloring Book</option>
          <option value="76">Fishing ABCs Coloring Book</option>
          <option value="77">Fun to Learn Animals</option>
          <option value="78">Fun to Learn Shapes and Opposites</option>
          <option value="79">Learn About Texas Dinosaurs</option>
          <option value="80">Learn About Texas Insects</option>
          <option value="81">Learning Pages - Dinosaurs</option>
          <option value="82">Learning Pages - Insects</option>
          <option value="83">Learning Pages - Reptiles</option>
          <option value="84">Learning Pages - Five Senses</option>
          <option value="85">Learning Pages - Measurements</option>
          <option value="86">Learning Pages - Oceans</option>
          <option value="87">Lucky the Ladybug Lucky's Adventure in Litterville</option>
          <option value="88">Manatee Anatomy</option>
          <option value="89">Manatee Coloring Book</option>
          <option value="90">Manatee Teacher Resources</option>
          <option value="91">NCLB- Helping Your Child Learn Science</option>
          <option value="92">The Golden Book of Chemistry Experiments</option>
        </optgroup>
        <optgroup label="Writing">
          <option value="0">Bright Futures Activity Book</option>
          <option value="93">Disney Learning The Alphabet</option>
          <option value="94">Fun to Learn ABC</option>
          <option value="95">Learning Pages - Cursive Writing</option>
          <option value="96">Learning Pages - Printing</option>
          <option value="97">Learning Pages - Writing the Alphabet</option>
          <option value="98">Preschool Writing Practice</option>
        </optgroup>
      </Select>
    </FormControl>

  )
};

export default SelectForm;